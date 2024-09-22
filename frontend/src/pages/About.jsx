import React from 'react';
import './About.css';

// imported assests
import Video from '../../src/video1.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

  const About =()=> {
    return <div className='About'>
         <div className='videoBg1'>
          <video src={Video} autoPlay loop muted></video>
         </div>

         <div className='sectionText1'>
          <h1>About </h1>   
          <br/><br/> 
          <SearchBar/>
          <Subtitle/>
         </div>
    </div>
  }

export default About;
