

import React, { useState } from 'react';
import './Tours.css';
import { Container, Row, Col } from 'reactstrap';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/Newsletter';
import Video from '../../src/video2.mp4';
import Subtitle from '../shared/Subtitle';
import Footer from '../components/Footer/Footer';

// Import the tours data
import tours from '../../src/assets/data/tours';  

const Tours = () => {
  const [visibleTours, setVisibleTours] = useState(8); // Initially showing 8 tours


  const handleSeeMore = () => {
    setVisibleTours((prevVisibleTours) => prevVisibleTours + 8); // Load 8 more tours
  };

  return (
    <div className='Tours'>
      {/* Background Video */}
      <div className='videoBg1'>
        <video src={Video} autoPlay loop muted></video>
      </div>

      {/* Section Text */}
      <div className='sectionText2'>
        <h1>Your Adventure Starts Here</h1>
        <br /><br />
        <SearchBar />
        <Subtitle />
      </div>

      {/* Tour List Section */}
      <section className='pt-0'>
        <Container>
          <Row>
            {/* Display visibleTours number of tours */}
            {tours.slice(0, visibleTours).map((tour) => (
              <Col lg='3' className='mb-4' key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            {/* See More Button */}
            {visibleTours < tours.length && ( 
              <Col lg='12'>
                <div className='see-more d-flex align-items-center justify-content-center mt-4'>
                  <button onClick={handleSeeMore} className='btn btn-primary'>
                    See More
                  </button>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Tours;
