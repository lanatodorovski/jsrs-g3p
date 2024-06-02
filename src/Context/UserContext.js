import React, {Component, createContext, useEffect, useState} from "react";

export const UserContext = createContext();
const UserContextProvider = (props) =>{
    const [users, setUsers] = useState(
        [
            {
                id: 1,
                username: "new_user",
                email: "new.user@gmail.com",
                password: "newuser123",
                boughtPatterns:[]
            },
            {
                id: 2,
                username: "user1234",
                email: "user.user@gmail.com",
                password: "userUser123",
                boughtPatterns: []
            },
            {
                id: 3,
                username: "uusseerr",
                email: "uusseerr@gmail.com",
                password: "uusseerr1234",
                boughtPatterns: []
            }
        ]
    );

    const [myUser , setMyUser]= useState({
        id: 0,
        username: "",
        email: "",
        password: "",
        boughtPatterns: []
    });
    

     const addUser = (username, email, password) => {
        
    }
    const setBoughtPattern = (username, patternId) => {
            let foundUser = users.find(user => user.username === username);
            foundUser.boughtPatterns.push(patternId);
    }
    const setUser = (username, password) => {
        let foundUser = users.find(user => user.username === username && user.password === password);
        if(foundUser != undefined){
            console.log("user found", foundUser);
            setMyUser(foundUser);

            return true;
        }else{
            return false;
        }
    }

    return(
        <UserContext.Provider value={{ users, myUser, addUser, setBoughtPattern, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
  
}

export default UserContextProvider;