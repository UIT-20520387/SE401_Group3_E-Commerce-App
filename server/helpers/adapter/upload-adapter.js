class UploadAdapter {
    async upload(file) {
      throw new Error("Upload method must be implemented");
    }
}
  
module.exports = UploadAdapter;