import './App.css';
import UserContextProvider from './Context/UserContext';
import Patterns from './Components/Patterns/Patterns';
import PatternContextProvider, { PatternContext } from './Context/PatternContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header';
import Login from './Components/Login/Login';
import Register from './Components/Register';
import { useState } from 'react';



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <PatternContextProvider>
      <UserContextProvider>
        <BrowserRouter>

          <Nav isLoggedIn={isLoggedIn}/>
          <Routes>
          <Route path= "/" element={<Header/>}/>
            <Route path='/patterns/*' element={<Patterns/>} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
        
      </UserContextProvider>


      </PatternContextProvider>
    </div>
  );
}

export default App;
