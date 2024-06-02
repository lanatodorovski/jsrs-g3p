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
                <span>{pattern.name}</span>
                <span>{pattern.price}</span>
            </div>
        
        </Link>
    );
}

export default PatternCard;