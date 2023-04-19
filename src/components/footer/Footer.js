import React from 'react';
import TwitterIcon from '../../assets/images/gorjeo.png';
import LinkedInIcon from '../../assets/images/linkedin.png';
import GitHubIcon from '../../assets/images/github.png';
import InstagramIcon from '../../assets/images/instagram.png';
import styles from  './footer.module.css'
import '../../syles.variable/variables.css'

function Footer() {
  return (
    <footer >
      <ul className={styles.ul}>
        <li>
          <a href="https://twitter.com/Cris110798" target="_blank">
            <img  className={styles.icons} src={TwitterIcon} alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/cristianserna0711/" target="_blank">
            <img  className={styles.icons} src={InstagramIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/crisserna/" target="_blank">
            <img className={styles.icons} src={LinkedInIcon} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a href="https://github.com/cserna98" target="_blank">
            <img className={styles.icons} src={GitHubIcon} alt="Instagram" />
          </a>
        </li>
       </ul>
    </footer>
    );
}
export default Footer;