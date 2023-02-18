
const { addQuestionService, getAllQuestionService, updateQuestionByIdService, deleteQuestionByIdService, getSingleQuestionByIdService } = require("../Services/question.service");


exports.addQuestion = async (req, res) => {
    try {
        const question = await addQuestionService(req.body);

        res.status(200).json({
            result: question,
            status: "success",
            message: "post is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getQuestion = async (req, res) => {

    try {
        const queries = {};

        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }
        const question = await getAllQuestionService(queries);

        res.status(200).json({
            result: question,
            status: "success",
            message: "Get billing list is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.getSingleQuestion = async (req, res) => {
    try {
        const question = await getSingleQuestionByIdService(req?.params?.id);
        res.status(200).json({
            result: question,
            status: "success",
            message: "Get single billing is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


exports.updateQuestion = async (req, res) => {
    try {
        const question = await updateQuestionByIdService(req.params.id, req.body);

        res.status(200).json({
            result: question,
            status: "success",
            message: "Update billing is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};



exports.deleteQuestion = async (req, res) => {
    try {
        const question = await deleteQuestionByIdService(req.params.id);

        res.status(200).json({
            result: question,
            status: "success",
            message: "Delete billing is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};