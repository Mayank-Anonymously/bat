const express = require("express");
const {
  CreateNewResult,
  GetAllResults,
} = require("../controller/ResultController");
const router = express.Router();

router.post("/result", CreateNewResult);
router.get("/updated/result", GetAllResults);

module.exports = router;
