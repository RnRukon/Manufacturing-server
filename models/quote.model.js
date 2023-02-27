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
    threeDFile: {
        type: Object,
        require: [true, "File is required"]
    }
},
    {
        timestamps: true,
    }
);

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote