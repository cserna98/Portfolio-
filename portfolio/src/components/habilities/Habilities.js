import {React, useState, useEffect} from 'react';
import Card from '../Cards/Cards'
import habilities from '../../assets/text/habilities.json'
import { GlobalContext } from '../utils/global.contex';




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
    <main className='colum Disp_flex'>
        <h1 id='skills_title' className='Disp_flex'>{language == 'es' ?("Habilidades"):("Skills")}</h1>
        <div className="Habilities Disp_flex">
        
            <div id='SoftSkills' className="Disp_flex colum skills">
                <h2 >{language == 'es' ?("Habilidades Blandas"):("Soft Skills")}</h2>
                <div>
                {SoftSkills.map((e)=>{
                return (<Card key={e.id} habilitie={e}/> )
                })}
                </div>
            </div>

            <div id='HardSkills' className="Disp_flex colum skills">
                <h2 >{language == 'es' ?("Habilidades Tecnicas"):("Hard Skills")}</h2>
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