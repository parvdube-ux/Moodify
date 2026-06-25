const express = require("express")
const moodController = require("../controllers/mood.controller")
const authUser = require("../middlewares/auth.middleware")

const router = express.Router();

router.post('/',authUser,moodController.saveMood)

router.get('/history',authUser,moodController.moodHistory)

module.exports = router