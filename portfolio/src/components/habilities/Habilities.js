import React from 'react';
import Card from '../Cards/Cards'



function Habilities() {

    const habilities=[{
        id: 1,
        habilitie:"nevedata",
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        SoftSkills: true
    }, 
    {
        id: 2,
        habilitie:"vulputate",
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        SoftSkills: true
    },
    {
        id: 3,
        habilitie:"maltatate",
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        SoftSkills: false
    },

    {
        id: 4,
        habilitie:"patateta",
        description:"Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        SoftSkills: true
    },      
]
    console.log(habilities)  

return (
    <main className='colum Disp_flex'>

        <h2>Habilities</h2>

        <div className="Habilities Disp_flex">               
            <div id='SoftSkills' className="Disp_flex colum skills">
                <h2 >Soft skills</h2>
                <div>
                {habilities.map((e)=>{
                return (e.SoftSkills ? (<Card key={e.id} habilitie={e}/> ):null)
                })}
                </div>
            </div>

            <div id='HardSkills' className="Disp_flex colum skills">
                <h2 >Hard skills</h2>
                <div>
                {habilities.map((e)=>{
                return (!e.SoftSkills ? (<Card key={e.id} habilitie={e}/> ):null)
                })}
                </div>
                
            </div>
        </div>
    </main>
    
  );
}

export default Habilities;