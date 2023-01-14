import React from 'react';
import TwitterIcon from '../../assets/images/gorjeo.png';
import LinkedInIcon from '../../assets/images/linkedin.png';
import GitHubIcon from '../../assets/images/github.png';
import InstagramIcon from '../../assets/images/instagram.png';

function Footer() {
  return (
    <footer className='Disp_flex'>
      <ul className='Disp_flex'>
        <li>
          <a href="https://twitter.com/tu_perfil">
            <img  className='icons' src={TwitterIcon} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/tu_perfil">
            <img  className='icons' src={InstagramIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/tu_perfil">
            <img className='icons' src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="">
            <img className='icons' src={GitHubIcon} alt="Instagram" />
          </a>
        </li>
       </ul>
    </footer>
    );
}
export default Footer;