const { S3Client } = require("@aws-sdk/client-s3");

class S3Adapter extends StorageAdapter {
    constructor(s3Instance) {
        super();

        this.s3 = new S3Client({
            region: 'ap-southeast-1',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            }
        });
    }
    async upload(file, options = {}) {
        try {
          const { bucketName, keyPrefix = "", metadata = {} } = options;
    
          const key = `${keyPrefix}${file.originalname}`;
    
          // Convert file buffer to a readable stream
          const stream = Readable.from(file.buffer);
    
          const command = new PutObjectCommand({
            Bucket: bucketName,
            Key: key,
            Body: stream,
            ContentType: file.mimetype,
            Metadata: metadata,
          });
    
          await this.s3.send(command);
    
          // Return the URL of the uploaded file
          const url = `https://${bucketName}.s3.${this.s3.config.region}.amazonaws.com/${key}`;
          return { url };
        } catch (error) {
          throw new Error(`S3 upload failed: ${error.message}`);
        }
      }
}
