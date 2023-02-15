import React, { useState } from "react";
import Detail from "./detail";
import "../assets/css/card.css"


function Card({ recipe }) {

  const [show, setShow] = useState(false);
  const [recipeDetail, setDetail] = useState();
  return (
    <>
      {
        recipe.map((item) => {
          /*console.log(item)*/
          let imagenPlato = item.image && item.image;
          let diet = item.diets && item.diets;
          if(imagenPlato !== undefined && diet !== undefined){
            return (
              <>
              <div className="card" onClick={()=>{setShow(true);setDetail(item)}}>
                <img className="imagen" src={imagenPlato} alt="img not found" />
                <div className="bottom">
                  <h3 className="title">{item.title}</h3>
                  <p className="diet">{item.diets}</p>
                </div>
              </div>
              <Detail show={show} item={recipeDetail} onClose={() => setShow(false)}/>
              </>
              )
          }
         
        })
      }

    </>
  );
}

export default Card;
