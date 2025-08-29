import React, { useMemo, useState } from 'react';
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
import { useLocation } from 'react-router-dom';
const Tours = () => {
  const [visibleTours, setVisibleTours] = useState(8); 
  const [seeMore, setSeeMore] = useState(true); 
  const location = useLocation();

  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const queryCity = (params.get('city') || '').trim().toLowerCase();
  const queryDistance = Number(params.get('distance') || 0);
  const queryMaxSize = Number(params.get('maxGroupSize') || 0);

  const filteredTours = useMemo(() => {
    if (!queryCity && !queryDistance && !queryMaxSize) return tours;
    return tours.filter(t => {
      const city = (t.city || '').toLowerCase();
      const matchCity = queryCity ? (city === queryCity) : true;
      const matchCost = queryDistance ? Number(t.price) <= queryDistance : true;
      const matchSize = queryMaxSize ? Number(t.maxGroupSize || t.groupSize || 0) >= queryMaxSize : true;
      return matchCity && matchCost && matchSize;
    });
  }, [queryCity, queryDistance, queryMaxSize]);


  const toggleTours = () => {
    if (seeMore) {
      setVisibleTours(filteredTours.length); 
    } else {
      setVisibleTours(8); 
    }
    setSeeMore(!seeMore); 
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
            {/* Display filtered tours */}
            {filteredTours.slice(0, visibleTours).map((tour) => (
              <Col lg='3' className='mb-4' key={tour._id || tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            {filteredTours.length === 0 && (
              <Col lg='12' className='mb-4 text-center'>
                <p>No tours found. Try adjusting your search.</p>
              </Col>
            )}

            {/* See More/See Less Button */}
            <Col lg='12'>
              <div className='see-more d-flex align-items-center justify-content-center mt-4'>
                {filteredTours.length > 8 && (
                  <button onClick={toggleTours} className='btn btn-primary'>
                    {seeMore ? 'See More' : 'See Less'}
                  </button>
                )}
              </div>
            </Col>
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
