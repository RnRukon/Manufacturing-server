const express = require("express");
const { addProduct, getProduct, updateProduct, deleteProduct, getSingleProduct } = require("../controllers/product.controller");
const authorization = require("../Middleware/authorization");
const uploader = require("../Middleware/uploader");
const verifyToken = require("../Middleware/verifyToken");


const router = express.Router();

router.post("/add-product", verifyToken, authorization('user'), uploader.single("image"), addProduct);

router.get("/get-products", getProduct);

router.get("/get-single-product/:id", getSingleProduct);
router.patch("/update-product/:id", uploader.single("image"), updateProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;