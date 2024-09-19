import React from 'react';
import './Home.css';

// imported assests
import Video from '../../src/video.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import ServiceCard from '../services/ServiceCard';
import { Col, Row, Container } from 'reactstrap';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

  const Home =()=> {
    return <div className='Home'>
         <div className='videoBg'>
          <video src={Video} autoPlay loop muted></video>
         </div>

         <div className='sectionText'>
          <h1> Unlock Your Travel Dreams</h1>    
          <h1 className='center'>With Us!</h1>
          <p>
          Explore top rated tours,hotels and restaurants around the world
          </p>
          <SearchBar/>
          <Subtitle/>
         </div>
         <section>
          <Container>
            <Row>
              <Col lg='3'>
              <h5 className='service_subtitle'> What we serve</h5>
              <h2 className='service_title'> We offer our best services</h2>
              </Col>
              <ServiceList/>
              <ServiceCard/>
            </Row>
          </Container>
         </section>
    {/* featured tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className='featured_tour-title'>Our Tours Featured</h2>
            </Col>
            <FeaturedTourList/>          
          </Row>
        </Container>
      </section>
      {/* featured tour section end*/}
    </div>
  };

export default Home;
