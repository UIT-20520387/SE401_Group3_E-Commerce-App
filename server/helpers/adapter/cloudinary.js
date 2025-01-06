const cloudinary = require("cloudinary").v2;
const UploadAdapter = require('./upload-adapter');
const { Readable } = require("stream");

class CloudinaryAdapter extends UploadAdapter {
  constructor() {
    super();
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    this.cloudinary = cloudinary;
  }

  async upload(file) {
    if (!file || !file.buffer) {
      throw new Error("Invalid file input");
    }

    try {
      const uploadOptions = {
        resource_type: "auto",
      };

      // Cloudinary doesn't natively support buffers; we need to convert to a stream
      const stream = Readable.from(file.buffer);

      const result = await new Promise((resolve, reject) => {
        const streamUpload = this.cloudinary.uploader.upload_stream(
          uploadOptions,
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        stream.pipe(streamUpload);
      });

      return {
        url: result.secure_url,
        publicId: result.public_id,
        resourceType: result.resource_type,
      };
    } catch (error) {
      throw new Error(`Cloudinary upload failed: ${error.message}`);
    }
  }
}

module.exports = CloudinaryAdapter;