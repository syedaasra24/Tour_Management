import React from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import {Container , Row , Col } from 'reactstrap';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import Newsletter from '../shared/Newsletter';
import TourCard from '../shared/TourCard';
import tourData from '../assets/data/tours';
import Video from '../../src/video2.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';

  const Tours = ()=> {
    return (
        <div className='Tours'>
         <div className='videoBg1'>
          <video src={Video} autoPlay loop muted></video>
         </div>

         <div className='sectionText2'>
          <h1>Your Adventure Starts Here</h1>  
          <br/><br/>
          <Subtitle/>
         </div>
          {/* featured tour section start */}
      { <section>
        <Container>
        <Row>
            <Col lg='12' className='mb-5'>
            <h5 className='service_subtitle'>Explore</h5>
              {/* <Subtitle subtitle={'Explore'}/> */}
              <h2 className='featured_tour-title'>Our Featured Tours</h2>
              <FeaturedTourList/>   
            </Col> 
            </Row>      
        </Container>
      </section> }
    </div>
    );
  };

export default Tours;

