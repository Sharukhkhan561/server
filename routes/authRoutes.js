const { login } = require("../controllers/authController");

const router = require("express").Router();
// const router = express.Router()
router.get("/login", login)
module.exports = router;