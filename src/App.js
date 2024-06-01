import './App.css';
import UserContextProvider from './Context/UserContext';
import Patterns from './Components/Patterns';
import PatternContextProvider, { PatternContext } from './Context/PatternContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <PatternContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/patterns/*' element={<Patterns/>} />
            
          </Routes>
        </BrowserRouter>
        
      </UserContextProvider>


      </PatternContextProvider>
    </div>
  );
}

export default App;
