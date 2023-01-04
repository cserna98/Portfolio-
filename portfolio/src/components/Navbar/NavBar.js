import React from 'react';
import { Link } from "react-router-dom";
import '../../Styles/Global.css';

const navBar = ()=>{

    return(       
            <nav className=" Disp_flex">
                <img className="logo" />               
                <ul className=" Disp_flex">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>                   
                </ul>
            </nav>       
    )

}

export default navBar;