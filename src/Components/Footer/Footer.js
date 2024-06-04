import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () =>{
    return(
        <div className="Footer">
            <div>
                <div className="block">
                    <h2>Pages</h2>
                    <Link>Home</Link>
                    <Link>Patterns</Link>
                </div>
                <div className="block">
                    <h2>Contact</h2>
                    <span>Ul. Matice hrvatske 11, 21000, Split</span>
                    <span>+385 021 434 580</span>
                    <span>crochet.creations@gmail.com</span>
                </div>
                <div className="block">
                    <h2>Socials</h2>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                </div>
            </div>
            <span>Copyright @2024 - Crochet Creations</span>
        </div>
    );
}

export default Footer;