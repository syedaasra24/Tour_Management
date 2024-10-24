import React, { useState, useEffect } from 'react';
import '../styles/Home.css'; // Importing the styles for the Home page

// Imported assets
import Video from '../../src/video.mp4';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import { Col, Row, Container } from 'reactstrap';
import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import TourCard from '../shared/TourCard';
import tourData from '../assets/data/tours'; // Assuming this is your tour.js file
import Newsletter from '../shared/Newsletter';
import Footer from '../components/Footer/Footer'; 

const Home = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 8); // later we will use backend
    setPageCount(pages);
  }, [page]);

  // Only show the first 8 tours on the home page
  const homeTours = tourData.slice(0, 8);

  return (
    <div className='Home'>
      {/* Background Video Section */}
      <div className='videoBg'>
        <video src={Video} autoPlay loop muted></video>
      </div>

      {/* Section Text */}
      <div className='sectionText'>
        <h1> Unlock Your Travel Dreams</h1>
        <h1 className='center'>With Us!</h1>
        <p>Explore top rated tours, hotels, and restaurants around the world</p>
        <SearchBar />
        <Subtitle />
      </div>

      {/* Services Section */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='service_subtitle'>What we serve</h5>
              <h2 className='service_title'>We offer you our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* Featured Tour Section */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <h5 className='service_subtitle'>Explore</h5>
              <h2 className='featured_tour-title'>Our Featured Tours</h2>
            </Col>
          </Row>
        </Container>

        <section className='pt-8'>
          <Container>
            <Row>
              {/* Display only the first 8 tours */}
              {homeTours.map((tour) => (
                <Col lg='3' className='mb-4' key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg='12'>
                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                  {[...Array(pageCount).keys()].map((number) => (
                    <span key={number} onClick={() => console.log(number)}>
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      {/* Experience Section */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience_content'>
                <h5 className='service_subtitle'>Experience</h5>
                <h2>
                  With all our experience <br /> We will serve you
                </h2>
                <p>
                  With years of expertise in the travel industry, our team is dedicated to creating memorable journeys that cater to every traveler's needs. We leverage our in-depth knowledge and local insights to offer exceptional service, ensuring that each experience is not just a trip, but a discovery filled with adventure and cultural richness.
                  <br />
                  Trust us to guide you through unforgettable moments and unique destinations.
                </p>
              </div>
              <div className='counter_wrapper d-flex align-items-center gap-5'>
                <div className='counter_box'>
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className='counter_box'>
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className='counter_box'>
                  <span>20</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              {/* You can include an image or any other content here */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery_title'>Visit Our Customer Tour Gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial_title'>What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
