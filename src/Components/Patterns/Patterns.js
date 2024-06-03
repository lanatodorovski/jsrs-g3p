import { useContext, useEffect } from "react";
import { PatternContext } from "../../Context/PatternContext.js";
import { Route, Routes} from "react-router-dom";
import PatternPage from "../PatternPage/PatternPage.js";
import PatternCard from "../PatternCard/PatternCard.js";
import "./Patterns.css";

const Patterns = () => {
    const { patterns} = useContext(PatternContext);
    console.log(patterns);

    return(
            
            <Routes>
                <Route path="/" element={
                <div className="Patterns">
                    {patterns.map(pattern => <PatternCard pattern={pattern}></PatternCard>)}
                </div>
                }/>
                {patterns.map(pattern => <Route path={`/${pattern.id}`} element={<PatternPage pattern={pattern}/>} />)}
            </Routes>

    )
}

export default Patterns;