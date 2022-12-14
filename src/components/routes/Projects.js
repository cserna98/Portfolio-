import React from 'react';
import { useEffect,useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../utils/global.contex';



function Projects() {
const {language} = GlobalContext()  
const [repos,SetRepos] = useState([]);
const [isVisible, setIsVisible] = useState(false)
const [isVisible2, setIsVisible2] = useState(false)

  async function fetchData() {
    const response = await fetch('https://api.github.com/users/cserna98/repos');
    const data = await response.json();   
    const newdata = data.map(({  id, url, language, name, created_at, pushed_at }) => ({ id, url, language, name, created_at, pushed_at }));
    SetRepos(()=>newdata)
    console.log(repos)  
  }  
  useEffect(() => {
    fetchData(); 
  }, []);

  console.log(repos)  

    return (
      <main className='colum Disp_flex' >
        <h2>{language == 'es' ?("Proyectos"):("Projects")}</h2>
      
        <div  className="Disp_flex projects"> 

          <div className={`Disp_flex projectState ${isVisible ? 'visible colum' : 'hidden'}`}>
            <h2>{language == 'es' ?("En desarrollo"):("Working on")}</h2>                
              {isVisible && (
                <div className='Disp_flex project_cards'>
                  {repos.map((e)=>(
                    <ProjectCard key={e.id} Project={e}/>
                  ))}
                </div> 
              )}
            <button 
            onClick={() => setIsVisible(!isVisible)}
            className={`btn ${isVisible ? 'btn-up' : 'btn-down'}`}>
              <FontAwesomeIcon icon={faCaretDown}  />
            </button>                      
          </div>


          <div className={`Disp_flex projectState ${isVisible2 ? 'visible colum' : 'hidden'}`} >
            <h2>{language == 'es' ?("Finalizados"):("finalized")}</h2>           
              {isVisible2 && (
                <div className='Disp_flex project_cards'>
                  {repos.map((e)=>(
                    <ProjectCard key={e.id} Project={e}/>
                  ))} 
                </div> 
              )}
            <button 
            onClick={() => setIsVisible2(!isVisible2)}
            className={`btn ${isVisible2 ? 'btn-up' : 'btn-down'}`}>
              <FontAwesomeIcon icon={faCaretDown}  />
            </button>
          </div>
        </div>           
      </main>
    );
  }
  export default Projects