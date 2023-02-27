const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const projectSchema = mongoose.Schema({
    projectName: {
        type: String,
        trim: true,
        required: [true, 'Project name is required']
    },
    email: {
        type: String,
        require: true
    },
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    }
    ,
    status: {
        type: String,
        default: 'pending',
        enum: ["pending", "approved"],
    }

},
    {
        timestamps: true,
    }
);

const Project = mongoose.model('project', projectSchema);

module.exports = Project;