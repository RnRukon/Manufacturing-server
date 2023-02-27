
const { addProjectService, getAllProjectService, updateProjectByIdService, deleteProjectByIdService, getSingleProjectByIdService, getMyProjectService } = require("../Services/project.service");
const { findUserByEmail } = require("../Services/user.service");


exports.addProject = async (req, res) => {
    try {

        const email = req?.user?.email;

        if (!email) {
            return res.status(401).json({
                status: "fail",
                error: 'Unauthenticated, please login'
            })
        }

        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(401).json({
                status: "fail",
                error: 'Not found user'
            })
        }

        const newData = { ...req.body, email, user: user?._id }


        const project = await addProjectService(newData);

        res.status(200).json({
            result: project,
            status: "success",
            message: "Project added is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getProject = async (req, res) => {

    try {
        const queries = {};

        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        const question = await getAllProjectService(queries);

        res.status(200).json({
            result: question,
            status: "success",
            message: "Getting Projects is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.getMyProjects = async (req, res) => {

    try {
        const queries = {};

        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        const email = req?.user?.email;

        const question = await getMyProjectService(queries, email);

        res.status(200).json({
            result: question,
            status: "success",
            message: "Getting Projects is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getSingleProject = async (req, res) => {
    try {
        const question = await getSingleProjectByIdService(req?.params?.id);
        res.status(200).json({
            result: question,
            status: "success",
            message: "Getting single Project is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.updateProject = async (req, res) => {
    try {
        const question = await updateProjectByIdService(req.params.id, req.body);

        res.status(200).json({
            result: question,
            status: "success",
            message: "Updating Project is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};



exports.deleteProject = async (req, res) => {
    try {
        const question = await deleteProjectByIdService(req.params.id);

        res.status(200).json({
            result: question,
            status: "success",
            message: "Deleting Project is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};