import React from 'react';
import { GlobalContext } from '../utils/global.contex';
import Card from '../Cards/Cards'



function Habilities() {

    const {habilities} = GlobalContext() 
    console.log(habilities)
    

  return (
    <div className="Habilities">
      <div className="container_cards Disp_flex ">
        {habilities.map((e)=>(
            <Card key={e.id} habilitie={e}/>      
        ))}
      </div>
      <div className="HardSkills">
        <h2>Hard Skills</h2>
        <p>Aquí iría la descripción de tus habilidades duras</p>
      </div>
    </div>
  );
}

export default Habilities;