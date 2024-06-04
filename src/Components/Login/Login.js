import { useContext, useEffect, useRef, useState } from "react";
import View from "../../Images/view.png";
import Hide from "../../Images/hide.png";
import "./Login.css";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const username = useRef(null);
    const password = useRef(null);

    const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);
    const [passwordVisibleImage, setPasswordVisibleImage]= useState(Hide);

    const {setUser} = useContext(UserContext);

    const handleDefault = (event) => {
        event.preventDefault();
        

        if(setUser(username.current.value.trim(), password.current.value)){
            setIsLoggedIn(true);
            navigate("/patterns");
        }else{
            alert("User either doesn't exist or some informations are put incorrectly.");
        }
    }

    useEffect(()=>{
        if(togglePasswordVisible){
            setPasswordVisibleImage(Hide);
        }else{
            setPasswordVisibleImage(View);
        }
    },[togglePasswordVisible]);
    return(
        <form className="Login" onSubmit={handleDefault}>
            <label for="username" >Username:</label>
            <input type="text" name="username" ref={username}/>
            <label for="password">Password:</label>
            <div className="password">
                <input type={togglePasswordVisible? "text": "password"} ref={password} name="password"/>
                <button type="button" id="eye" onClick={()=>setTogglePasswordVisible(!togglePasswordVisible)}><img src={passwordVisibleImage}/></button>
            </div>

            
            <button type="submit" id="submit">Submit</button>
           
        </form>
    );
}

export default Login;

