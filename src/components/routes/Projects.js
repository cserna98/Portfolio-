import React from 'react';
import { useEffect,useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../utils/global.contex';
import styles from './Projects.module.css';
import reposdata from '../../assets/text/repos.json' 



function Projects() {
const {language} = GlobalContext()  
const [repos,SetRepos] = useState([]);
const [mergerepos, setMergeRepos] = useState()
const [isVisible, setIsVisible] = useState(false)
const [isVisible2, setIsVisible2] = useState(false)



  async function fetchData() {
    const response = await fetch('https://api.github.com/users/cserna98/repos');
    const data = await response.json();   
    const newdata = data.map(({  id, svn_url, language, name, created_at, pushed_at }) => ({ id, svn_url, language, name, created_at, pushed_at }));
    SetRepos(()=>newdata)
    console.log(repos)  
  }  
  useEffect(() => {
    fetchData(); 
  }, []);

  useEffect(()=>{
    const mergedArray = repos.map(obj1 => {
      const obj2 = reposdata.find(obj2 => obj1.name === obj2.name);
      return obj2 ? { ...obj1, ...obj2 } : obj1;
    });

    setMergeRepos(mergedArray)

  },[repos])

  console.log(mergerepos)  

    return (
      <main className={styles.main} >
        <h2 className="title">{language == 'es' ?("Proyectos"):("Projects")}</h2>
      
        <div  className={styles.projects}> 

          <div className={`${styles.projectState} ${isVisible ? styles.visible  : styles.hidden}`}>
            <h2 className={styles.title}>{language == 'es' ?("En desarrollo"):("Working on")}</h2>                
              {isVisible && (
                <div className={styles.projectCards} >
                  {mergerepos.map((e)=>(
                   <div className={styles.cardRender} key={e.id}>
                    {e.finalized ? (<ProjectCard key={e.id} Project={e}/>) : null}
                  </div>
                    
                  ))}
                </div> 
              )}
            <button 
            onClick={() => setIsVisible(!isVisible)}
            className={`${styles.btn} ${isVisible ? styles.btnUp : styles.btn_down}`}>
              <FontAwesomeIcon icon={faCaretDown}  />
            </button>                      
          </div>


          <div className={`${styles.projectState} ${isVisible2 ? styles.visible  : styles.hidden}`} >
            <h2 className={styles.title}>{language == 'es' ?("Finalizados"):("finalized")}</h2>           
              {isVisible2 && (
                <div className={styles.projectCards}>
                  {mergerepos.map((e)=>(
                   <div key={e.id}>
                    {e.finalized ?  null : (<ProjectCard key={e.id} project={e}/>)}
                  </div>
                    
                  ))}
                </div> 
              )}
            <button 
            onClick={() => setIsVisible2(!isVisible2)}
            className={`${styles.btn} ${isVisible2 ? styles.btnUp : styles.btn_down}`}>
              <FontAwesomeIcon icon={faCaretDown}  />
            </button>
          </div>
        </div>           
      </main>
    );
  }
  export default Projects