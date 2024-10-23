import React, { useState, useEffect } from 'react';
// import CommonSection from '../shared/CommonSection';
import './Tours.css';
import { Container, Row, Col } from 'reactstrap';
import TourCard from '../shared/TourCard';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/Newsletter';
import useFetch from '../hooks/useFetch';  // Ensure useFetch is exported properly
import { BASE_URL } from '../utils/config';
import Video from '../../src/video2.mp4';
import Subtitle from '../shared/Subtitle';  // Ensure Subtitle is exported correctly

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0); // Include both page and setPage

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tourCount / 8); // Calculate total pages
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tourCount, tours]);

  return (
    <div className='Tours'>
      <div className='videoBg1'>
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className='sectionText2'>
        <h1>Your Adventure Starts Here</h1>
        <br /><br />
        <SearchBar />
        <Subtitle />
      </div>

      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading.....</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {
            !loading && !error && (
              <Row>
                {tours?.map(tour => (
                  <Col lg='3' className='mb-4' key={tour._id}>
                    <TourCard tour={tour} />
                  </Col>
                ))}

                <Col lg='12'>
                  <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                    {[...Array(pageCount).keys()].map(number => (
                      <span key={number} onClick={() => setPage(number)}>
                        {number + 1}
                      </span>
                    ))}
                  </div>
                </Col>
              </Row>
            )
          }
        </Container>
      </section>
      {/* <CommonSection /> */}
      <Newsletter />
    </div>
  );
};

export default Tours;
