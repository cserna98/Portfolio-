import React, { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext } from '../utils/global.contex';
import styles from './Cards.module.css';




function Card({habilitie}) {
    const {language} = GlobalContext()
    const [showFullContent, setShowFullContent] = useState(false);     

    return (
      <div className={styles.cards}>
        <h3 className={styles.title}>{habilitie.habilitie}</h3>
                {showFullContent ? (
                <p>{habilitie.description}</p>
                ) : (<p>{habilitie.description.substring(0, 80)}</p>)
                }                
                <button className={styles.button} onClick={()=>setShowFullContent(!showFullContent)}>{showFullContent ? (
                  (language == 'es' ?("...ver menos"):("...show less"))
                  ):(language == 'es' ?("...ver mas"):("...show more"))
                  }
                  </button>
      </div>
    );
  }

  export default Card
/**/