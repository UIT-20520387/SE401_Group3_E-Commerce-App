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

  build() {
    return this.product;
  }
}

module.exports = ProductBuilder;
