const router = require("express").Router();
const listingsController = require("../../controllers/listingsController");
//const Grid = require('gridfs-stream');
const multer = require('multer');
const storage = require("../../controllers/imageController")
const upload = multer({ storage });
router.route("/")
  .get(listingsController.findAll)
  .post(upload.single('file'), listingsController.create);

// Matches with "/api/listings/:id"
router
  .route("/:id")
  .get(listingsController.findById)
  .put(listingsController.update)
  .delete(listingsController.remove);

module.exports = router;