const S3Adapter = require("../../helpers/adapter/s3");
const CloudinaryAdapter = require("../../helpers/adapter/cloudinary");
const { Product, ProductBuilder } = require("../../models/Product");
const UploadStrategy = require("../../helpers/strategy/upload-strategy");

const uploadStrategy = new UploadStrategy();

const handleImageUpload = async (req, res) => {
    try {
        if (!req.file) {
            return res.json({
                success: false,
                message: "No file uploaded",
            });
        }

        const adapterType = req.query.adapter || (Math.random() < 0.5 ? "s3" : "cloudinary");

        if (adapterType === "s3") {
            uploadStrategy.setAdapter(new S3Adapter());
        } else if (adapterType === "cloudinary") {
            uploadStrategy.setAdapter(new CloudinaryAdapter());
        } else {
            throw new Error("Unsupported adapter type");
        }

        const result = await uploadStrategy.upload({
            buffer: req.file.buffer,
            mimetype: req.file.mimetype,
            originalname: req.file.originalname,
        });

        res.json({
            success: true,
            result,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error occured",
        });
    }
};

//add a new product
const addProduct = async (req, res) => {
    try {
        const {
            image,
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock,
            averageReview,
        } = req.body;

        // Xây dựng sản phẩm mới bằng ProductBuilder
        const newProduct = new ProductBuilder()
            .setImage(image)
            .setTitle(title)
            .setDescription(description)
            .setCategory(category)
            .setBrand(brand)
            .setPrice(price)
            .setSalePrice(salePrice)
            .setTotalStock(totalStock)
            .setAverageReview(averageReview)
            .build();

        // Tạo và lưu sản phẩm mới
        await newProduct.save();

        res.status(201).json({
            success: true,
            data: newlyCreatedProduct,
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({
            success: false,
            message: "An error occurred",
        });
    }
};

//fetch all products

const fetchAllProducts = async (req, res) => {
    try {
        const listOfProducts = await Product.find({});
        res.status(200).json({
            success: true,
            data: listOfProducts,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
};

//edit a product
const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            image,
            title,
            description,
            category,
            brand,
            price,
            salePrice,
            totalStock,
            averageReview,
        } = req.body;

        let findProduct = await Product.findById(id);
        if (!findProduct)
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });

        findProduct.title = title || findProduct.title;
        findProduct.description = description || findProduct.description;
        findProduct.category = category || findProduct.category;
        findProduct.brand = brand || findProduct.brand;
        findProduct.price = price === "" ? 0 : price || findProduct.price;
        findProduct.salePrice =
            salePrice === "" ? 0 : salePrice || findProduct.salePrice;
        findProduct.totalStock = totalStock || findProduct.totalStock;
        findProduct.image = image || findProduct.image;
        findProduct.averageReview = averageReview || findProduct.averageReview;

        await findProduct.save();
        res.status(200).json({
            success: true,
            data: findProduct,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
};

//delete a product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product)
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });

        res.status(200).json({
            success: true,
            message: "Product delete successfully",
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Error occured",
        });
    }
};

module.exports = {
    handleImageUpload,
    addProduct,
    fetchAllProducts,
    editProduct,
    deleteProduct,
};
