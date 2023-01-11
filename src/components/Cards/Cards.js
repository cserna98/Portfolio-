import React, { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../utils/global.contex';




function Card({habilitie}) {
    const {language} = GlobalContext()
    const [showFullContent, setShowFullContent] = useState(false);     

    return (
      <div className="cards">
        <h2>{habilitie.habilitie}</h2>
                {showFullContent ? (
                <p>{habilitie.description}</p>
                ) : (<p>{habilitie.description.substring(0, 80)}</p>)
                }                
                <button onClick={()=>setShowFullContent(!showFullContent)}>{showFullContent ? (
                  (language == 'es' ?("...ver menos"):("...View less"))
                  ):(language == 'es' ?("...ver mas"):("...View more"))
                  }
                  </button>
      </div>
    );
  }

  export default Card
/**/