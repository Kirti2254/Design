
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Landingpage from './components/LandingPage/Landingpage';
//import AboutUs from './components/AboutUs';
import Fontawesomeicons from './components/Fontawesome/Fontawesomeicons';
import Supernova from './components/Supernova/Supernova';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter
} from "react-router-dom";


function App() {
  return (
      <div className='whole' style={{background:"black"}}>
      <BrowserRouter>
       
                <Navbar/> 
                <Routes>

            <Route exact element={<Landingpage />} path="/"/> 
            {/* <Route element={<AboutUs />} path="/aboutus"/> */}
            <Route element={<Fontawesomeicons />} path="/fontawesome"/>
            <Route element={<Supernova />} path="/supernova"/>
                </Routes>

                     <Footer/>
                     

        </BrowserRouter>
      </div>
  
  );
}

export default App;
