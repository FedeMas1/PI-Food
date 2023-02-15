const {Router} = require('express');
const dietController = require('../controllers/dietController');

const router = Router()


router.get("/", dietController.dietList)

module.exports = router