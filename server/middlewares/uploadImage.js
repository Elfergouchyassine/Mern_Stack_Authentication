const multer = require('multer');

// set storage
const storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    // filename
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    // You can add file type filtering here if needed
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});

module.exports = upload.single("avatar");