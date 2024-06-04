import "./Register.css";
import { useNavigate } from "react-router-dom";
import {useContext, useEffect, useRef, useState} from "react";
import View from "../../Images/view.png";
import Hide from "../../Images/hide.png";
import { UserContext } from "../../Context/UserContext";

const Register = ({setIsLoggedIn}) => {
    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const passwordRepeat = useRef(null);

    const [togglePasswordVisible, setTogglePasswordVisible] = useState(false);
    const [togglePasswordRepeatVisible, setTogglePasswordRepeatVisible] = useState(false);

    const [passwordVisibleImage, setPasswordVisibleImage]= useState(Hide);
    const [passwordVisibleRepeatImage, setPasswordVisibleRepeatImage]= useState(Hide);

    const navigate = useNavigate();
    const {addUser} = useContext(UserContext);

    const handleDefault = (event) => {
        event.preventDefault();

        if(username.current.value.trim() != ""){
            if(password.current.value == passwordRepeat.current.value){
                if(addUser(username.current.value, email.current.value, password.current.value)){
                    setIsLoggedIn(true);
                    navigate("/patterns");
                    
                }else{
                    alert("Username or email already exist. Please change your username and/or email.");
                }
            }else{
                alert("Passwords are not matching.");
            }

        }else{
            alert("Username can not be empty.")
        }
    };

    useEffect(()=> {
        if(!togglePasswordVisible){
            setPasswordVisibleImage(View);
        }else{
            setPasswordVisibleImage(Hide);
        }
    }, [togglePasswordVisible]);

    useEffect(()=> {
        if(!togglePasswordRepeatVisible){
            setPasswordVisibleRepeatImage(View);
        }else{
            setPasswordVisibleRepeatImage(Hide);
        }
    }, [togglePasswordRepeatVisible]);
    return(
    
            <form onSubmit={handleDefault} className="Register">
                <label for="username">Username: </label>
                <input  type="text" name="username" ref={username} required/>
                <label for="email">Email: </label>
                <input type="email" name="email" ref={email} required></input>

                <label for="password">Password: </label>
                <div className="password">
                    <input type={togglePasswordVisible? "text": "password"} ref={password} name="password"/>
                    <button type="button" id="eye" onClick={()=>setTogglePasswordVisible(!togglePasswordVisible)}><img src={passwordVisibleImage}/></button>
                </div>

                <label for="password-repeat">Repeat Password: </label>
                <div className="password">
                    <input type={togglePasswordRepeatVisible? "text": "password"} ref={passwordRepeat} name="password-repeat"/>
                    <button type="button" id="eye" onClick={()=>setTogglePasswordRepeatVisible(!togglePasswordRepeatVisible)}><img src={passwordVisibleRepeatImage}/></button>
                </div>

                <button type="submit" id="submit">Submit</button>
            </form>
       
    );
}

export default Register;