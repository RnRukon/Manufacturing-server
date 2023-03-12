const mongoose = require("mongoose");
// const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const quoteSchema = mongoose.Schema({
    projectId: {
        type: ObjectId,
        require: [true, 'Project id is required']
    },
    quoteTitle: {
        type: String,
        trim: true,
        minLength: [3, "Title must be at least 3 characters."],
    },
    type: {
        type: String,
        require: true
    },
    material: {
        type: String,
    },
    resolution: {
        type: String,
    },
    orientation: {
        type: String,
    },
    finish: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
    threeDFile: {
        type: Object,
        require: [true, "File is required"]
    },
    status:{
        type:String,
        enum: ["pending", "approved", "rejected"],
    }
},
    {
        timestamps: true,
    }
);

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote