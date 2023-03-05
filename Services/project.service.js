const Project = require("../models/project_model");



exports.createProjectService = async (ProjectData) => {
    const project = await Project.create(ProjectData);
    return project;
};

exports.getAllProjectService = async (queries) => {


    const projects = await Project.find({})
        .populate('user')
        .skip(queries.skip)
        .limit(queries.limit)
        .sort('createdAt');

    const total = await Project.countDocuments();
    const page = Math.ceil(total / queries.limit);
    return { total, page, projects };


};
exports.getMyProjectService = async (queries, email) => {


    const projects = await Project.find({ email })
        .skip(queries.skip)
        .limit(queries.limit)
        .sort('createdAt');

    const total = await Project.countDocuments();
    const page = Math.ceil(total / queries.limit);
    return { total, page, projects };


};

exports.getSingleProjectByIdService = async (id) => {

    const project = await Project.findById(
        { _id: id }
    );
    return project;
};

exports.updateProjectByIdService = async (id, data) => {

    const project = await Project.findOneAndUpdate(
        { _id: id },
        data,
        {
            runValidators: true,
        }
    );
    return project;
};


exports.deleteProjectByIdService = async (id) => {

    const project = await Project.deleteOne({ _id: id });
    return project;
};
