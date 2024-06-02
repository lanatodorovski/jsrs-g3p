import React from "react";
import {Link} from "react-router-dom";
import "./PatternCard.css";
 
const PatternCard = ({pattern}) => { 
  
    return(
        <Link className="PatternCard" to={`/patterns/${pattern.id}`}>
            <div>
                <img src={pattern.image}/>
            </div>
            <div>
                <h2>{pattern.name}</h2>
                <span>{pattern.price}€</span>
            </div>
        
        </Link>
    );
}

export default PatternCard;