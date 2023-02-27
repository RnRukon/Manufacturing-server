const Quote = require("../models/quote.model");


exports.addQuoteService = async (ProjectData) => {
    const quote = await Quote.create(ProjectData);
    return quote;
};
exports.getMyQuoteService = async (id) => {
    const quotes = await Quote.find({projectId:id});
    return quotes;
};
exports.uploadTheeDFileService = async (id, fileData) => {
   
    const file = await Quote.updateOne({ _id: id }, { threeDFile: fileData },
        {
            runValidators: true,
        }
    );
    return file;
};