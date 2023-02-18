const Product = require("../models/product _model");



exports.addProductService = async (productData) => {
    const product = await Product.create(productData);
    return product;
};

exports.getAllProductService = async (queries) => {


    const product = await Product.find({})
        .skip(queries.skip)
        .limit(queries.limit)
        .sort('createdAt');


    const total = await Product.countDocuments();
    const page = Math.ceil(total / queries.limit);
    return { total, page, product };


};

exports.getSingleProductByIdService = async (id) => {

    const product = await Product.findById(
        { _id: id }
    );
    return product;
};

exports.updateProductByIdService = async (id, data) => {

    const product = await Product.findOneAndUpdate(
        { _id: id },
        data,
        {
            runValidators: true,
        }
    );
    return product;
};


exports.deleteProductByIdService = async (id) => {

    const product = await Product.deleteOne({ _id: id });
    return product;
};
