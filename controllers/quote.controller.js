const { addQuoteService, uploadTheeDFileService, getMyQuoteService } = require("../Services/quote.service");

exports.addQuote = async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.file) {
            return res.suite(401).json({
                status: 'fail',
                error: 'Pleas add a file'
            })
        }
        const fileName = await req?.file?.filename;
        const host = await req.protocol + '://' + req.get('host');
        const fileURL = host + "/threeDFiles/" + fileName;

        const newFile = await { ...req.file, fileURL };

        const newQuote = { quoteTitle: fileName, threeDFile: newFile, projectId: id };

        const quote = await addQuoteService(newQuote);
        res.status(200).json({
            result: quote,
            status: "success",
            message: "Quote create is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};
exports.getMyQuotes = async (req, res) => {
    try {
        const { id } = req.params;

        const quotes = await getMyQuoteService(id);
        res.status(200).json({
            result: quotes,
            status: "success",
            message: "Quote create is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};

exports.uploadTheeDFile = async (req, res) => {
    try {

        if (!req.file) {
            return res.suite(401).json({
                status: 'fail',
                error: 'Pleas add a file'
            })
        }

        const { id } = req.params;

        const fileName = await req?.file?.filename;
        const host = req.protocol + '://' + req.get('host');
        const fileURL = host + "/threeDFiles/" + fileName;

        const newData = await { ...req.file, fileURL };


        const quote = await uploadTheeDFileService(id, newData);


        res.status(200).json({
            result: quote,
            status: "success",
            message: "file upload is Successfully",
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
        });
    }
};


