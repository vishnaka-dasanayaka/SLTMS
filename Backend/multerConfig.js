const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/Lessons'); // specify where to store uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // use the original filename
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
