import React, { useState, useEffect } from 'react';
//import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import {Container , Row , Col } from 'reactstrap';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import TourCard from '../shared/TourCard';
import tourData from '../assets/data/tours';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/Newsletter';

import Video from '../../src/video2.mp4';
import Subtitle from '../shared/Subtitle';

  const Tours = ()=> {
    const [pageCount , setPageCount] = useState(0);
    const [page , setPage] = useState(0);

    useEffect(()=>{
      const pages = Math.ceil(5/8);  // later we will use backend
      setPageCount(pages);
    },[page]);

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

         <section>
          <Container>
            <Row>
              <SearchBar/>
            </Row>
          </Container>
         </section>


         <section className='pt=8'>
          <Container>
            <Row>
              {tourData?.map(tour=>(
                <Col lg='3' className='mb-4' key={tour.id}>
                <TourCard tour={tour}></TourCard>
                </Col>
              ))}

              <Col lg='12'>
                <div className='pagination d-flex align-items-center 
                justify-content-center mt-4 gap-3'>
                {[...Array(pageCount).keys()].map(number=> (
                  <span key={number} onClick={number}>
                    {number + 1}
                  </span>
                ))}

                </div>
              </Col>
            </Row>
          </Container>
         </section>
    </div>
    );
  };

export default Tours;