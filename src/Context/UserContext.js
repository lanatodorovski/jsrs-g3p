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
                boughtPatterns:[1]
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
                boughtPatterns: [2,3]
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
    

     const addUser = (username_, email_, password_) => {
        if(users.find(user => user.username == username_) == undefined && users.find(user => user.email == email_) == undefined){
            setUsers(prevArr=>[...prevArr, { id: users.length + 1, username: username_, email: email_, password: password_, boughtPatterns: []}]);
            return true;
        }else{
            return false;
            
        }
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
    const setBoughtPattern = (username, patternId) => {
            let foundUser = users.find(user => user.username === username);
            if(!foundUser.boughtPatterns.includes(patternId)){
                foundUser.boughtPatterns.push(patternId);
            }      
    }
    useEffect(()=>{
        if(users.length > 3){
            const addedUser = users.find(user => user.id == users.length);
            setMyUser(addedUser);
        }
    },[users]);
    return(
        <UserContext.Provider value={{ users, myUser, addUser, setBoughtPattern, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
  
}

export default UserContextProvider;