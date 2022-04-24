import './App.css';
// import Recipe from './components/Recipe';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Recipes from "./components/Recipes";

const App = () => {
  return ( 
    <Router>
         <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
};

export default App;
