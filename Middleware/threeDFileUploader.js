const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: "threeDFiles/",
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + "-" + file.originalname)
  }
})

const threeDFileUploader = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const supportedImage = /stp|glb/;
    const extension = path.extname(file.originalname);

    if (supportedImage.test(extension)) {
      cb(null, true);
    } else {
      cb(new Error("Must be a stp/glb file"));
    }

  },
  limits: {
    fileSize: 100000000,
  }
})


module.exports = threeDFileUploader;