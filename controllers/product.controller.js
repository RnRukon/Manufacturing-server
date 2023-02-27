
const { addProductService, getAllProductService, updateProductByIdService, deleteProductByIdService, getSingleProductByIdService } = require("../Services/product.service");


exports.addProduct = async (req, res) => {

    try {


        const product = await addProductService(req);

        res.status(200).json({
            result: product,
            status: "success",
            message: "Product added Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getProduct = async (req, res) => {

    try {
        const queries = {};

        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        const product = await getAllProductService(queries);

        res.status(200).json({
            result: product,
            status: "success",
            message: "Getting products is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getSingleProduct = async (req, res) => {
    try {
        const product = await getSingleProductByIdService(req?.params?.id);
        res.status(200).json({
            result: product,
            status: "success",
            message: "Getting single product is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.updateProduct = async (req, res) => {
    try {


        const product = await updateProductByIdService(req.params.id, req);

        res.status(200).json({
            result: product,
            status: "success",
            message: "Updating product is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};



exports.deleteProduct = async (req, res) => {
    try {
        const product = await deleteProductByIdService(req.params.id);

        res.status(200).json({
            result: product,
            status: "success",
            message: "Deleting product is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};