const express = require("express");
const { addProduct, getProduct, updateProduct, deleteProduct, getSingleProduct } = require("../controllers/product.controller");
const checkLogin = require("../Middleware/checkLogin");

const router = express.Router();

router.post("/add-product", addProduct);
router.get("/get-products", getProduct);

router.get("/get-single-product/:id", getSingleProduct);
router.patch("/update-product/:id", updateProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;