import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () =>{
    return(
        <div className="Footer">
            <div>
                <div className="block">
                    <h2>Pages</h2>
                    <Link to="/">Home</Link>
                    <Link to="/patterns">Patterns</Link>
                </div>
                <div className="block">
                    <h2>Contact</h2>
                    <span>Ul. Matice hrvatske 11, 21000, Split</span>
                    <span>+385 021 434 580</span>
                    <span>crochet.creations@gmail.com</span>
                </div>
                <div className="block">
                    <h2>Socials</h2>
                    <a href="https://www.instagram.com/gogss.ep_ambassador_school/">Facebook</a>
                    <a href="https://facebook.com/p/%C5%A0kola-za-dizajn-grafiku-i-odr%C5%BEivu-gradnju-Split-100063692612842/">Instagram</a>
                </div>
            </div>
            <span>Copyright @2024 - Crochet Creations</span>
        </div>
    );
}

export default Footer;