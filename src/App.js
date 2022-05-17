//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {Route, Switch} from "react-router-dom";
import About from "./components/AboutUs"
import AboutUs from './components/AboutUs';

function App() {
  return (
    
      <>
        <Navbar/> 
        <AboutUs/>  
      </>
  
  );
}

export default App;
