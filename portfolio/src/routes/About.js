import { GlobalContext } from '../components/utils/global.contex';
import { useState } from 'react';
function About() {
    
    const {habilities} = GlobalContext()  
    const [showFullContent, setShowFullContent] = useState(false); 
    const toggleShowContent = (index) =>{
    }

    return (     
    <div id="about">
        <div className="description">
        <img/>
        <h1>My full name, Cristian Serna Lopez </h1>        
        <p className="descriptionText">
        Soy una persona apasionada por la tecnología y la
        programación, y decidí tomar el camino de la 
        formación profesional en este campo. Soy ingeniero
        civil de la Universidad de Medellín y en 2021 comencé
        a aprender de manera autónoma sobre el desarrollo de
        software. En marzo de 2022, me matriculé en la escuela
        Digital House para obtener una formación más sólida y
        completa como desarrollador técnico certificado.
        Actualmente, estoy adquiriendo habilidades en front-end,
        back-end y conocimientos en infraestructura para poder
        desempeñarme de manera efectiva en proyectos de tecnología.
        </p>
        <p className="descriptionText">
        I am a passionate person about technology and programming,
        and I decided to pursue professional training in this field.
        I am a civil engineer from the University of Medellín and in
        2021 I began learning about software development on my own.
        In March 2022, I enrolled in the Digital House school to 
        obtain a solid and comprehensive training as a certified 
        technical developer. Currently, I am acquiring skills in 
        front-end, back-end and infrastructure knowledge to 
        effectively work on technology projects.
        </p>         
      </div>

      <div className="Habilities Disp_flex">
        {habilities.map((e,index)=>(
            <div className='cards' key={e.id}>
                <h2>{e.habilitie}</h2>
                {showFullContent ? (
                <p>{e.description}</p>
                ) : (<p>{e.description.substring(0, 100)}</p>)
                }                
                <button onClick={()=>toggleShowContent(index)}>...show more</button>
            </div>
        ))}
      </div>
    </div>
    );
  }

  export default About;