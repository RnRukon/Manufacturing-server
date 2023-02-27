
const Product = require("../models/product _model");



exports.addProductService = async (req) => {

    const fileName = await req?.file?.filename;
    const host = req.protocol + '://' + req.get('host');
    const image = host + "/images/" + fileName;

    const file = req.file;
    file.image = image;
    
    const newData = req.body
    newData.image = file;

    const product = await Product.create(newData);
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

exports.updateProductByIdService = async (id, req) => {

    const fileName = await req?.file?.filename;
    const host = await req.protocol + '://' + req.get('host');
    const image = host + "/images/" + fileName;
    const file = await req?.file;
    file.image = image;
    const newData = await req.body
    if (file) {
        newData.image = await file;
    }


    const product = await Product.updateOne(
        { _id: id },
        newData,
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
