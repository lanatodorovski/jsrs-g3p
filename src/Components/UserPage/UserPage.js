import { useContext } from "react";
import "./UserPage.css";
import { UserContext } from "../../Context/UserContext";
import "./UserPage.js";
import Icon from "../../Images/icon.jpg"
import { PatternContext } from "../../Context/PatternContext";
import PatternCard from "../PatternCard/PatternCard";
import { useNavigate } from "react-router-dom";

const UserPage = ({ setIsLoggedIn}) => {
    const navigate = useNavigate();
    const {myUser, setUser} = useContext(UserContext);
    var {patterns} = useContext(PatternContext);
    patterns = patterns.filter(pattern => myUser.boughtPatterns.includes(pattern.id));

    const logOut = () => {
        setUser({id:0, username: "", email: "", password: "", boughtPatterns: []});
        setIsLoggedIn(false);
        navigate("/patterns");
    }

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
                <button onClick={logOut}>Log out</button>
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