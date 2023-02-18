const Question = require("../models/question_model");


exports.addQuestionService = async (questionData) => {
    const question = await Question.create(questionData);
    return question;
};

exports.getAllQuestionService = async (queries) => {


    const question = await Question.find({})
        .skip(queries.skip)
        .limit(queries.limit)
        .sort('createdAt');


    const total = await Question.countDocuments();
    const page = Math.ceil(total / queries.limit);
    return { total, page, question };


};

exports.getSingleQuestionByIdService = async (id) => {

    const question = await Question.findById(
        { _id: id }
    );
    return question;
};

exports.updateQuestionByIdService = async (id, data) => {

    const question = await Question.findOneAndUpdate(
        { _id: id },
        data,
        {
            runValidators: true,
        }
    );
    return question;
};


exports.deleteQuestionByIdService = async (id) => {

    const question = await Question.deleteOne({ _id: id });
    return question;
};
