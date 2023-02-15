import React, {useState} from 'react';
import '../assets/css/home.css';
import imagenCocina from "../assets/images/cooking.png";
import Card from './Card';
import axios from "axios";

function Home() {
    
    const[search, setSearch] =useState("");
    const[recipeData, setData] = useState([]);
    const searchRecipe = (event) =>{
        if(event.key === "Enter"){
            
           axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&addRecipeInformation=true&number=100&apiKey=2488b6e41a5e445487e68139d20de000`)
           .then(res => setData(res.data.results))
           .catch(err => console.log(err))
        }
    }
    return (
        <React.Fragment>
            <div className="header">
                <div className="row1">
                    <h1>"Aprendemos a cocinar<br /> con la cocina de otros <br /> y en un momento dado,<br /> hacemos la nuestra"</h1>
                </div>
                <div className='row2'>
                    <h2>Encuentra tu receta</h2>
                    <div className='search'>
                        <input type="text" placeholder="Buscar..."
                        value={search} onChange={e => setSearch(e.target.value)}
                        onKeyPress={searchRecipe}></input>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src={imagenCocina} alt="img not found" />
                    <div className='options-container'>
                
                    </div>
                </div>




            </div>
            <div className='container'>
                {
                     <Card recipe={recipeData}/>
                }
               
                
            </div>
            


        </React.Fragment>
    )
}
export default Home;