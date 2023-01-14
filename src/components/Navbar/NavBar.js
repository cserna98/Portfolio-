import {React, useState} from 'react';
import { Link } from "react-router-dom";
import '../../Styles/Global.css';
import { Switch } from '@mui/material';
import español_Icon from '../../assets/images/espa.png'
import english_Icon from '../../assets/images/reino-unido.png'
import { GlobalContext } from '../utils/global.contex';



const NavBar = ()=>{ 

    const {languageChanger,language} = GlobalContext()


    return(       
            <nav className="Disp_flex">
                <img className="logo" />               
                <ul className=" Disp_flex">
                    <li className='routes'>
                        <Link to="/">{language == 'es' ?("Inicio"):("Home")}</Link>
                    </li>
                    <li className='routes'>
                        <Link to="/about">{language == 'es' ?("Acerca de mi"):("About")}</Link>
                    </li>
                    <li className='routes'>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className='routes'>
                        <Link to="/contact">Contact</Link>
                    </li>  
                    <li>
                                            
                    </li>                 
                </ul>
                <div id="language_changer" className='Disp_flex'>
                    <img className='leguajeItem' src={español_Icon}/>
                    <Switch
                    checked={language === 'en'}
                    onChange={languageChanger}
                    value="language"
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}                    
                    />  
                    <img className='leguajeItem' src={english_Icon}/>                     
                </div>                 
            </nav>       
    )

}

export default NavBar;