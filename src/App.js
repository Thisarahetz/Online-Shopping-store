import logo from './logo.svg';
import './App.css';
import Navbar from './Componet/Heder/Navbar';
import About from './Componet/About';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
              
              <Route path="/about"><About></About></Route>
              
      </Switch>
      </BrowserRouter>

    </div>
   
  );
}

export default App;
