const Mongoose = require("mongoose");

const questionSchema = Mongoose.Schema({
    question: {
        type: String,
        trim: true,
        required: [true, 'Question is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, "Email most be required"],
        trim: true,
    },
    status: {
        type: String,
        default:'pending',
        enum: ["pending", "approved"],
    }

},
    {
        timestamps: true,
    }
);

const Question = Mongoose.model('question', questionSchema);

module.exports = Question