const mongoose = require("mongoose");

class MongooseSingleton {
  constructor() {
    if (!MongooseSingleton.instance) {
      this._connect();
      MongooseSingleton.instance = this;
    }
    return MongooseSingleton.instance;
  }

  async _connect() {
    try {
      this.connection = await mongoose.connect(
        "mongodb://localhost:27017/ecommerce",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      );
      console.log("MongoDB connected");
    } catch (error) {
      console.error("Database connection error:", error);
      process.exit(1);
    }
  }

  getConnection() {
    return this.connection;
  }
}

const instance = new MongooseSingleton();
Object.freeze(instance);
module.exports = instance;
