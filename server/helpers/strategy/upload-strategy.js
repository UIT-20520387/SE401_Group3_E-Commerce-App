class UploadStrategy {
    constructor() {
        this.adapter = null;
    }

    setAdapter(adapter) {
        if (!adapter || typeof adapter.upload !== "function") {
            throw new Error(
                "Invalid adapter: must implement an 'upload' method"
            );
        }

        this.adapter = adapter;
    }

    async upload(file) {
        if (!this.adapter) {
            throw new Error(
                "No adapter set. Please set an adapter before uploading."
            );
        }

        return await this.adapter.upload(file);
    }
}

module.exports = UploadStrategy;