const mongoose = require("mongoose");

class MongooseSingleton {
  static instance = null;
  static connection = null;

  constructor() {
    if (!MongooseSingleton.instance) {
      MongooseSingleton.instance = this;
      this._connect();
    }
    return MongooseSingleton.instance;
  }

  async _connect() {
    try {
      MongooseSingleton.connection = await mongoose.connect(
        "mongodb://mongodb:mongodb@mongo:27017/ecommerce",
        // "mongodb://localhost:27017/ecommerce",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          authSource: "admin", // Ensure admin is used for authentication
        }
      );
      console.log("MongoDB connected");
    } catch (error) {
      console.error("Database connection error:", error);
      process.exit(1);
    }
  }

  getConnection() {
    return MongooseSingleton.connection;
  }
}

module.exports = new MongooseSingleton();
