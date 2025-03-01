const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();
const mongooseSingleton = require("./helpers/mongooseSingleton");

const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/admin/products", adminProductsRouter);
app.use("/admin/orders", adminOrderRouter);

app.use("/shop/products", shopProductsRouter);
app.use("/shop/cart", shopCartRouter);
app.use("/shop/address", shopAddressRouter);
app.use("/shop/order", shopOrderRouter);
app.use("/shop/search", shopSearchRouter);
app.use("/shop/review", shopReviewRouter);

app.use("/common/feature", commonFeatureRouter);

// if (mongooseSingleton.getConnection() == undefined || mongooseSingleton.getConnection() == null) {
//     console.log("mongoose singleton connection failed");
//     process.exit(1);
// }
    
app.listen(PORT, () =>
    console.log(`Server is now running on port ${PORT}`)
);
