import {React, useState} from 'react';
import { Link } from "react-router-dom";
import {  Link as ScrollLink,scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import styles from './navBar.module.css';
import español_Icon from '../../assets/images/espa.png'
import english_Icon from '../../assets/images/reino-unido.png'
import { GlobalContext } from '../utils/global.contex';
import logo from "../../assets/images/logo.png"
import '../../syles.variable/variables.css'




const NavBar = ()=>{ 

    const location = useLocation();
    const isHomeAbout = location.pathname === '/';


    const scrollToAboutMe = () => {
        scroller.scrollTo('aboutMeSection', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        });
    };


    const {languageChanger,language} = GlobalContext()

    
    
    return(       
            <nav className={styles.nav}>
                <img src={logo} className={styles.logo}/>               
                <ul>
                    <li className={styles.routes}>
                        {isHomeAbout ? (
                        <ScrollLink  className={styles.scrollLink} to="homeSection" smooth={true} duration={500}>
                            {language === 'es' ? 'Inicio' : 'Home'}
                        </ScrollLink>
                        ) : (
                        <Link to="/">{language === 'es' ? 'Inicio' : 'Home'}</Link>
                        )}
                    </li>

                    <li className={styles.routes}>
                        {isHomeAbout ? (
                        <ScrollLink  className={styles.scrollLink}  to="aboutMeSection" smooth={true} duration={500}>
                        {language === 'es' ? 'sobre de mi' : 'About'}
                        </ScrollLink>
                        ) : (
                        <Link to="/" onClick={scrollToAboutMe}>{language === 'es' ? 'sobre de mi' : 'About'}</Link>
                        )}
                    </li>

                    <li className={styles.routes}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={styles.routes}>
                        <Link to="/contact">Contact</Link>
                    </li>  
                
                </ul>
                <button
                    id={styles.language_changer}
                    className={styles.Disp_flex} 
                    checked={language === 'en'}
                    onClick={languageChanger}
                    value="language"
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}                    
                    > {language === 'en' ? <img className={styles.leguajeItem} src={español_Icon} /> 
                    :
                        <img className={styles.leguajeItem} src={english_Icon} />
                    }    
                    </button>                                   
            </nav>       
    )

}

export default NavBar;