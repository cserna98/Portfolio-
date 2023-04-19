import {React, useState, useEffect} from 'react';
import Card from '../Cards/Cards'
import habilities from '../../assets/text/habilities.json'
import { GlobalContext } from '../utils/global.contex';
import styles from './Habilities.module.css';




function Habilities() {

    const {language} = GlobalContext()
    const [habilitiescontent,setHabilitiescontent] = useState(habilities[language])
       
    const SoftSkills=habilitiescontent.SoftSkills
    const hardSkills=habilitiescontent.hardSkills

    useEffect(()=>{   
        console.log(language)
        setHabilitiescontent(habilities[language])      
        }    
    ,[language])
    return (
        <main  id={styles.skills} >
    
            <h1 id={styles.skills_title} className={styles.title}>{language == 'es' ?("Habilidades"):("Skills")}</h1>
            
            <div className={styles.Habilities}>
                <div id={styles.SoftSkills} className={styles.skills}>
                    <h2 className={styles.title}>{language == 'es' ?("Habilidades Blandas"):("Soft Skills")}</h2>
                    <div>
                    {SoftSkills.map((e)=>{
                    return (<Card key={e.id} habilitie={e}/> )
                    })}
                    </div>
                </div>
    
                <div id={styles.HardSkills} className={styles.skills}>
                    <h2 className={styles.title}>{language == 'es' ?("Habilidades Tecnicas"):("Hard Skills")}</h2>
                    <div>
                    {hardSkills.map((e)=>{
                    return  (<Card key={e.id} habilitie={e}/> )
                    })}
                    </div>
                </div>
    
            </div>
            
        </main>
        
      );
    }
export default Habilities;

/**/