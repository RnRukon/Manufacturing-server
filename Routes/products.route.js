const express = require("express");
const { addProduct, getProduct, updateProduct, deleteProduct, getSingleProduct } = require("../controllers/product.controller");
const checkLogin = require("../Middleware/checkLogin");
const uploader = require("../Middleware/uploader");


const router = express.Router();

router.post("/add-product", uploader.single("image"), addProduct);
router.get("/get-products", getProduct);

router.get("/get-single-product/:id", getSingleProduct);
router.patch("/update-product/:id", uploader.single("image"), updateProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;