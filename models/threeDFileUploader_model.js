const Mongoose = require("mongoose");
// const validator = require("validator");


const quoteSchema = Mongoose.Schema({
    threeDFile: {
        type: String,
        require:[true,'file is required']
    },
},
    {
        timestamps: true,
    }
);

const Quote = Mongoose.model('Quote', quoteSchema);

module.exports = Quote