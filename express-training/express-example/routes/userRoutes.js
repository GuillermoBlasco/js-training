const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get("/", userController.index);

router.get("/:id", userController.getOne);

router.post("/", userController.createOne);

router.patch("/:id", userController.updateOne);
router.put("/:id", userController.updateOne);

router.delete("/:id", userController.deleteOne);

module.exports = router;
