import React from 'react';
import Card from '../Cards/Cards'
import habilities from '../../assets/text/habilities.json'



function Habilities() {
        
    const SoftSkills=habilities.SoftSkills
    const hardSkills=habilities.hardSkills

return (
    <main className='colum Disp_flex'>

        <h2>Habilities</h2>

        <div className="Habilities Disp_flex">               
            <div id='SoftSkills' className="Disp_flex colum skills">
                <h2 >Soft skills</h2>
                <div>
                {SoftSkills.map((e)=>{
                return (<Card key={e.id} habilitie={e}/> )
                })}
                </div>
            </div>

            <div id='HardSkills' className="Disp_flex colum skills">
                <h2 >Hard skills</h2>
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