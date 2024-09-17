import React from 'react';
import './Home.css';

// imported assests
import Video from '../../src/video.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

  const Home =()=> {
    return <div className='Home'>
         <div className='videoBg'>
          <video src={Video} autoPlay loop muted></video>
         </div>

         <div className='sectionText'>
          <h1> Unlock Your Travel Dreams</h1> 
          <h1 className='center'>With Us!</h1>
          <p>
            Discover the World's most adventurous nature, 
            life is so short for a 
            trip.
          </p>
          <SearchBar/>
          <Subtitle/>
         </div>
    </div>
  }

export default Home;
