const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { Readable } = require("stream");
const { Upload } = require("@aws-sdk/lib-storage");
const UploadAdapter = require("./upload-adapter");

class S3Adapter extends UploadAdapter {
    constructor() {
        super();
        this.s3 = new S3Client({
            region: "ap-southeast-1",
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
        this.bucketName = process.env.AWS_BUCKET_NAME;
    }

    async upload(file) {
        if (!file || !file.buffer) {
            throw new Error("Invalid file input");
        }

        if (!this.bucketName) {
            throw new Error("AWS_BUCKET_NAME environment variable is required");
        }

        try {
            const keyPrefix = "uploads/";
            const key = `${keyPrefix}${file.originalname || Date.now()}`;

            const upload = new Upload({
                client: this.s3,
                params: {
                    Bucket: this.bucketName,
                    Key: key,
                    Body: Readable.from(file.buffer),
                    ContentType: file.mimetype,
                    Metadata: {}, // Add any metadata here
                },
            });

            upload.on("httpUploadProgress", (progress) => {
                console.log(
                    `Upload progress: ${progress.loaded}/${progress.total}`
                );
            });

            const result = await upload.done();

            return {
                url: result.Location,
                key,
                bucket: this.bucketName,
            };
        } catch (error) {
            throw new Error(`S3 upload failed: ${error.message}`);
        }
    }
}

module.exports = S3Adapter;
