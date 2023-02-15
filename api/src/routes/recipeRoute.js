const {Router} = require('express');
const router = Router();
const recipeController = require("../controllers/recipeController");




router.get("/list", recipeController.list);

router.post("/create", recipeController.create);

router.get("/:id", recipeController.detail);


module.exports = router