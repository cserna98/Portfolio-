import React from 'react';
//import './Styles/Global.css';
import Home from './components/routes/Home';
import About from './components/routes/About';
import Contact from './components/routes/Contact';
import Projects from './components/routes/Projects';
import { Route,Routes,Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'
import Footer from './components/footer/Footer'

function App() {
  return (

    <div className="App">  
    <NavBar/>    
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />        
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />      
        <Route path="/productdetails" element={<Contact/>} />
      </Routes>      
    <Footer></Footer>  
    </div>
  );
}

export default App;
