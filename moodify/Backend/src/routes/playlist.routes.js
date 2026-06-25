const express =
  require("express");

const router = express.Router()
 

const { recommendPlaylist} = require(
  "../controllers/playlist.controller"
);

router.post("/recommend",recommendPlaylist);

module.exports = router;