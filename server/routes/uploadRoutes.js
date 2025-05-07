const route = require("express").Router();
const uploadImage = require("../middlewares/uploadImage");
const auth = require("../middlewares/auth");
const uploadController = require("../controllers/uploadController");

route.post(
    "/api/upload",
    uploadImage,
    auth,
    uploadController.uploadAvatar
);

module.exports = route;