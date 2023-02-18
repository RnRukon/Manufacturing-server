const Mongoose = require("mongoose");

const questionSchema = Mongoose.Schema({
    question: {
        type: String,
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, "Email most be required"],
        trim: true,
    },
    status: {
        type: Boolean,
        default:false,
    }

},
    {
        timestamps: true,
    }
);

const Question = Mongoose.model('question', questionSchema);

module.exports = Question