import React from 'react';
import './About.css';

// imported assets
import Video from '../../src/video1.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import Footer from '../components/Footer/Footer'; // Importing the Footer component

const About = () => {
  return (
    <div className='About'>
      {/* Background Video Section */}
      <div className='videoBg1'>
        <video src={Video} autoPlay loop muted></video>
      </div>

      {/* Section Text */}
      <div className='sectionText1'>
        <h1>About Us</h1>
        <br /><br />
        <SearchBar />
        <Subtitle />
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default About;
