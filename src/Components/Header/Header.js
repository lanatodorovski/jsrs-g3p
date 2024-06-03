import { Link } from "react-router-dom";
import "./Header.css";
const Home = () => {
    return(
        <div className="Header">
            <div>
                <h1>Crochet Creations</h1>
                <p>Welcome to Crochet Creations! Find high-quality crochet patterns for all skill levels. Explore cozy blankets, stylish scarves, adorable amigurumi, and more with detailed instructions and photos. Start your next project today!</p>
                <Link to="/patterns"><button>Explore Patterns</button></Link>
            </div>
                <span>Made by: Lana Todorovski</span>
        </div>
    );
}

export default Home;