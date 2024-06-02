import { useContext } from "react";
import "./UserPage.css";
import { UserContext } from "../../Context/UserContext";
import "./UserPage.js";
import Icon from "../../Images/icon.jpg"
import { PatternContext } from "../../Context/PatternContext";
import PatternCard from "../PatternCard/PatternCard";

const UserPage = () => {
    const {myUser} = useContext(UserContext);
    var {patterns} = useContext(PatternContext);
    patterns = patterns.filter(pattern => myUser.boughtPatterns.includes(pattern.id));
    return(
        <div className="UserPage">
            <div id="user-details">
                <img src={Icon}/>

                <div>
                    <h2>Username</h2>
                    <span>{myUser.username}</span>
                </div>
                <div>
                    <h2>Email</h2>
                    <span>{myUser.email}</span>
                </div>
            </div>
            <div id="bought-patterns">
                    <h1>Bought Patterns</h1>
                    <div>
                        {patterns.map(pattern => <PatternCard pattern={pattern}/>)}
                    </div>
            </div>
        </div>
    );
}

export default UserPage;