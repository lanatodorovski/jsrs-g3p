import React, {Component, createContext, useState} from "react";

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
    

     const setUser = (username, email, password, checkPassword) => {
        
    }
    const setBoughtPattern = (username, patternId) => {
            let foundUser = users.find(user => user.username === username);
            foundUser.boughtPatterns.push(patternId);
    }
    const getUser = (username, password) => {
        let foundUser = users.find(user => user.username === username && user.password === password);
        if(foundUser != undefined){
            setMyUser(foundUser);
        }
    }
    return(
        <UserContext.Provider value={{ users, myUser, setUser, setBoughtPattern, getUser}}>
            {props.children}
        </UserContext.Provider>
    );
  
}

export default UserContextProvider;