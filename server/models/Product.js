const mongoose = require("mongoose");

// Define the Mongoose Schema and Model
const ProductSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    description: String,
    category: String,
    brand: String,
    price: Number,
    salePrice: Number,
    totalStock: Number,
    averageReview: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

// ProductBuilder Class
class ProductBuilder {
  constructor() {
    this.product = {};
  }

  setImage(image) {
    this.product.image = image;
    return this;
  }

  setTitle(title) {
    this.product.title = title;
    return this;
  }

  setDescription(description) {
    this.product.description = description;
    return this;
  }

  setCategory(category) {
    this.product.category = category;
    return this;
  }

  setBrand(brand) {
    this.product.brand = brand;
    return this;
  }

  setPrice(price) {
    this.product.price = price;
    return this;
  }

  setSalePrice(salePrice) {
    this.product.salePrice = salePrice;
    return this;
  }

  setTotalStock(totalStock) {
    this.product.totalStock = totalStock;
    return this;
  }

  setAverageReview(averageReview) {
    this.product.averageReview = averageReview;
    return this;
  }

  async save() {
    // Validate and save the product to the database
    const productDocument = new Product(this.product);
    return await productDocument.save();
  }

  build() {
    return this.product;
  }
}

module.exports = { Product, ProductBuilder };
