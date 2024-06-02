import { useContext, useEffect, useState, useRef } from "react";
import "./Nav.css";
import { UserContext } from "../../Context/UserContext";
import Patterns from "../Patterns/Patterns";
import Icon from "../../Images/icon.jpg"
import { Link } from "react-router-dom";

const Nav = ({isLoggedIn}) => {
    const {myUser} = useContext(UserContext);
    return(
        <nav className="Nav">
            <div>
               <Link to="/">Home</Link>
                <Link to="/patterns">Patterns</Link> 
            </div >

            {isLoggedIn &&
            <Link id="icon"><span>{myUser.username}</span><img src={Icon}/></Link>}

            { !isLoggedIn && 
                <div>
                    <Link to="/login">Log in</Link>
                    <Link to="/register">Register</Link>
                </div>
            }
           
        </nav>
    );
}

export default Nav;