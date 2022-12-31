import { useEffect,useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';


function Projects() {
const [repos,SetRepos] = useState([]);

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
  const options = { year: 'numeric', month: 'long', day: 'numeric' };



    return (
      <main className='colum Disp_flex' >
        <h2>PROJECTS</h2>
        <div  className="Disp_flex projects">                
        <div className="Disp_flex projectState">
          <h2>working on</h2>
          <div className='Disp_flex project_cards'>
          {repos.map((e)=>(
            <ProjectCard key={e.id} Project={e}/>
          ))} 
          </div>             
        </div>


        <div className="Disp_flex projectState">
          <h2>finalized</h2>
          <div className='Disp_flex project_cards'>
          {repos.map((e)=>(
            <ProjectCard key={e.id} Project={e}/>                     
          ))}            
          </div>             
        </div>     

        </div>           
      </main>
    );
  }
  export default Projects