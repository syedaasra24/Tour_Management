import React from 'react';
import './Tours.css';

// imported assests
import Video from '../../src/video2.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

  const Tours =()=> {
    return <div className='Tours'>
         <div className='videoBg1'>
          <video src={Video} autoPlay loop muted></video>
         </div>

         <div className='sectionText2'>
          <h1>Your Adventure Starts Here</h1>  
          <br/><br/>
          <SearchBar/>
          <Subtitle/>
         </div>
    </div>
  }

export default Tours;
