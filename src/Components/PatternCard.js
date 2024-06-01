import { useContext } from "react";
import {Link} from "react-router-dom";
import { UserContext } from "../Context/UserContext";
 
const PatternCard = ({pattern}) => { 
    const {myUser} = useContext(UserContext);
    return(
        <Link className="PatternCard" to={`/patterns/${pattern.id}`}>
            {pattern.name}
        </Link>
    );
}

export default PatternCard;