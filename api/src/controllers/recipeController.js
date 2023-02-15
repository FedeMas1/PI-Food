const axios = require('axios');
require('dotenv').config();
const { Recipe, Diet } = require('../db');
const {API_KEY, spoonacularURL} = process.env;



const recipeController = {

 list: async (req, res)  => {
    try
    {
        const resAxios = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
        const { results } = resAxios.data ;
        //console.log(resAxios.data);
    
        
        if (results.length > 0) {

            let response = await results?.map((result) => {
                return {
                    name: result.title,
                    vegetarian: result.vegetarian,
                    vegan: result.vegan,
                    glutenFree: result.glutenFree,
                    dairyFree: result.dairyFree, 
                    image: result.image, 
                    idApi: result.id, 
                    score: result.spoonacularScore,
                    healthScore: result.healthScore,
                    types: result.dishTypes?.map(element => element),  
                    diets: result.diets?.map(element => element), 
                    summary:result.summary, 
                    steps: (result.analyzedInstructions[0] && result.analyzedInstructions[0].steps?result.analyzedInstructions[0].steps.map(item=>item.step).join(" \n"):'')
                }        
            })

        return response;
    } 

    }catch (error) {
        console.error(error);
        return ([])
    }
},

 detail:  async (req, res) => {
    const { id } = req.params;
    
    try{
        if (id.length > 12){
            const dataDB = await Recipe.findByPk(id,{
                include: {
                model: Diet,
                atributes: ["name"],
                through: {
                    attributes: [],
                    },
                },
            });
            if(dataDB){
            const obj = {
                id: dataDB.id,
                name: dataDB.name,
                summary: dataDB.summary,
                score: dataDB.score,
                healthScore: dataDB.healthScore,
                image: dataDB.image,
                steps: dataDB.steps,
                diets: dataDB.diets?.map(diet => diet.name)
            }
                res.json(obj)
            }else{
                console.log('bd')
                const objerr = {
                    name: 'Recipe not Found',
                    summary: 'None',
                    score: 0,
                    healthScore: 0,
                    image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',
                    steps: 'none',
                    diets: []
                }
                res.json(objerr)
            }
        }else{

            const resAxios = await axios.get(`${spoonacularURL}/recipes/${id}/information?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
            const {result} = resAxios.data;
            let obj = {};

            obj = {
                name: result.title, 
                vegetarian: result.vegetarian,
                vegan: result.vegan,
                glutenFree: result.glutenFree,
                dairyFree: result.dairyFree,
                image: result.image, 
                idApi: result.id, 
                score: result.spoonacularScore, 
                healthScore: result.healthScore, 
                diets: result.diets?.map(element => element),types: result.dishTypes?.map(element => element), 
                summary:result.summary, 
                steps: result.instructions
               }
            
            if (obj){
                res.json(obj);
            }else{

                let objerrors

                objerrors = {
                    name: 'Recipe not Found', 
                    image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',  
                    score: 0, 
                    healthScore: 0, 
                    diets: [], 
                    summary:'none', 
                    steps: 'none'}

                res.json(objerrors)
            }
        }
    }catch(e){
        let objerr
    
        objerr = {name: 'only enter numbers less than 100000 or UUID code', 
        image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',  
        score: 0, 
        healthScore: 0, 
        diets: [], 
        summary:'none', 
        steps: 'none'}

    res.json(objerr)
    }
},

 create: async (req, res) => {
    let{
        name,
        summary,
        score,
        healthScore,
        image,
        steps,
        diets
    } = req.body

    try{
        let recipeCreate = await Recipe.create({ 
            name,
            summary,
            score,
            healthScore,
            image,
            steps,
        })

        let dietDB = await Diet.findAll({ 
            where: {name: diets}
        })

        if (!name) return res.status(400).send({error: 'Debe ingresar el name para la receta'});
        if (!summary) return res.status(400).send({error: 'Debe ingresar un summary del receta'});
        // console.log(recipeCreate);
        // console.log(dietDB);
        
        recipeCreate.addDiet(dietDB);
        res.send('Succesfull');

    }catch(error){
        res.status(400).send(error);
    }
}

}






module.exports = recipeController;