import React from "react";
import "../assets/css/detail.css"

function Detail({show, item, onClose}) {
    if(!show){
        return null
    }
    let imagenPlato = item.image && item.image;
    return (
      <div className="detail">
        <div className="detail-inner">
            <button className="close" onClick={onClose}><i className="fa-sharp fa-solid fa-circle-xmark"></i></button>
            <div className="inner-box">
                <img src={imagenPlato} alt="img not found" />
                <div className="info">
                    <h1>{item.title}</h1>
                    <h3>{item.diets}</h3>
                    <h4>{item.healthScore}</h4>
                    {/*<a href="#"><button>Editar</button></a>*/}
                </div>
            </div>
            <h4 className="description">{item.summary}</h4>
        </div>
      </div>
    );
  }
  
  export default Detail;
  