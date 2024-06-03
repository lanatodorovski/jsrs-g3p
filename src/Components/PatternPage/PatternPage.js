import { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import "./PatternPage.css";
import CommentSection from "../CommentSection/CommentSection";

const PatternPage = ({ pattern}) => {
    const { myUser, setBoughtPattern } = useContext(UserContext);
    const [isBought, setIsBought] = useState(() => {
        if (myUser.boughtPatterns.find(patternId => patternId === pattern.id) !== undefined) {
            return true;
        } else {
            return false;
        }
    })
    const loadButton = () => {
        if (myUser.id !== 0 && isBought) {
            return <div>
                <a href={pattern.pdf} download >
                    <button id="download-btn">Download pattern PDF</button>
                </a>

            </div>
        } else {
            return <div>
                <button onClick={buyPatternButton} id="buy-btn">Buy pattern</button>
                <span>{pattern.price}€</span>
            </div>
        }
    }

    const buyPatternButton = () => {
        if (myUser.id === 0) {
            alert("You are not assigned an account. Register or log in to buy products.");
        } else {
            setBoughtPattern(myUser.username, pattern.id);
            setIsBought(true);
        }
    }
    return (
        <>
            <div className="PatternPage">
                <div>
                    <h1>{pattern.name}</h1>
                    <p>{pattern.description}</p>
                    {loadButton()}
                </div>
                <img src={pattern.image} />
            </div>
            <CommentSection pattern={pattern}/>
        </>

    );
}

export default PatternPage;