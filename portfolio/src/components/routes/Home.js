import React from 'react';
import profilePicture from '../../assets/images/profile.jpg'
function Home() {

    return (
      <main className='Disp_flex' id='home'>
        <div className="description Disp_flex">
        <h1>Hello, i'm Cristian and this is my personal web site </h1>
        <p className="descriptionText">Web developer in training, with a strong interest
        in learning and familiarizing myself with the tools 
        necessary to create digital projects efficiently. My
        goal is to become a professional capable of creating
        comprehensive programs that serve as tools for 
        society. I am constantly striving to improve and 
        enhance my skills in order to provide value and make
        a difference in the world.</p>        
      </div>
      <div className="profilePicture">
        <img src={profilePicture} ></img>
      </div>
      </main>
      
    );
  }

  export default Home;