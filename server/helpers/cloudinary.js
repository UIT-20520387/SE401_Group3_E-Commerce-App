const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: "",
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

class CloudinaryAdapter {
  constructor(cloudinaryInstance) {
    this.cloudinary = cloudinaryInstance;
  }

  async upload(file, options = { resource_type: "auto" }) {
    try {
      const result = await this.cloudinary.uploader.upload(file, options);
      return result;
    } catch (error) {
      throw new Error(`Upload failed: ${error.message}`);
    }
  }
}

const cloudinaryAdapter = new CloudinaryAdapter(cloudinary);

async function imageUploadUtil(file) {
  return await cloudinaryAdapter.upload(file);
}

module.exports = { upload, imageUploadUtil, CloudinaryAdapter };