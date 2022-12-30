import React, { useContext } from 'react';
import { useState } from 'react';


function Card({habilitie}) {

    const [showFullContent, setShowFullContent] = useState(false);     

    return (
      <div className="cards">
        <h2>{habilitie.habilitie}</h2>
                {showFullContent ? (
                <p>{habilitie.description}</p>
                ) : (<p>{habilitie.description.substring(0, 100)}</p>)
                }                
                <button onClick={()=>setShowFullContent(!showFullContent)}>...show more</button>
      </div>
    );
  }

  export default Card
/**/