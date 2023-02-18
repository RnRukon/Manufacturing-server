const Mongoose = require("mongoose");
// const validator = require("validator");


const productSchema = Mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minLength: [3, "Title must be at least 3 characters."],
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    },
    description: {
        type: String,
        required: [true, "Description most be required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
    },

    category: {
        type: String,
        required: [true, "Category is required"],
    },
    features: {
        type: String,
        required: [true, "Features is required"],
    },
    keyFeatures: {
        type: String,
        required: [true, "Key Features is required"],
    },

},
    {
        timestamps: true,
    }
);

const Product = Mongoose.model('product', productSchema);

module.exports = Product