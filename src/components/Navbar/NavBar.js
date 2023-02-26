import {React, useState} from 'react';
import { Link } from "react-router-dom";
import styles from './navBar.module.css';
import español_Icon from '../../assets/images/espa.png'
import english_Icon from '../../assets/images/reino-unido.png'
import { GlobalContext } from '../utils/global.contex';
import logo from "../../assets/images/logo.png"
import '../../syles.variable/variables.css'



const NavBar = ()=>{ 

    const {languageChanger,language} = GlobalContext()

    
    
    return(       
            <nav className={styles.nav}>
                <img src={logo} className={styles.logo}/>               
                <ul>
                    <li className={styles.routes}>
                        <Link to="/">{language == 'es' ?("Inicio"):("Home")}</Link>
                    </li>
                    <li className={styles.routes}>
                        <Link to="/about">{language == 'es' ?("Acerca de mi"):("About")}</Link>
                    </li>
                    <li className={styles.routes}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={styles.routes}>
                        <Link to="/contact">Contact</Link>
                    </li>  
                    <li>
                                            
                    </li>                 
                </ul>
                <div id={styles.language_changer} className={styles.Disp_flex} >
                <img className={styles.leguajeItem}  src={español_Icon}/>
                <button
                    checked={language === 'en'}
                    onChange={languageChanger}
                    value="language"
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}                    
                    />    
                    <img className={styles.leguajeItem}  src={english_Icon}/>                     
                </div>                 
            </nav>       
    )

}

export default NavBar;