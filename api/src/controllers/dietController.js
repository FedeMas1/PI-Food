const { Diet } = require("../db.js");

const dietController = {
    dietList: (req, res) => {
        Diet.findAll()
            .then(diets => {
                let response = {
                    data: diets,
                    status: 200,
                    count: diets.length,
                    url: '/diet'


                }
                res.json(response);
            })
    }
}

module.exports = dietController;