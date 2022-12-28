import './Styles/Global.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import { Route,Routes,Outlet } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'

function App() {
  return (
    
    <div className="App">  
    <NavBar/>    
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        
      </Routes>      
      
    </div>
  );
}

export default App;
