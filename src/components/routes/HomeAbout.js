import React from 'react';
import { Element, scroller } from 'react-scroll';
import About from '../aboutMe/About'
import Home from '../Home/Home'
import Style from './HomeAbout.module.css'

function HomeAbout() {

    return ( 
    <div className={Style.Homeabout}>
      <Element name="homeSection" id="homeSection">
        <Home />
      </Element>
      <div className={Style.space}></div>
      <Element className={Style.about} id="aboutMeSection" name="aboutMeSection">
        <About />
      </Element>
      <button >Aprende más sobre mí</button>
    </div>
     );
}

export default HomeAbout;
