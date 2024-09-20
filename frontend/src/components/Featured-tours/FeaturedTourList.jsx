import React from 'react'
import TourCard from '../../shared/TourCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'


const FeaturedTourList = () => {

  const data = Object.values(tourData);//assumes tourData is an object
  return (
  <div>
    {
      data?.map(tour => (
        <Col lg="3" className='mb-4' key={tour.id}>
          <TourCard tour={tour}/>
        </Col>
      ))
    }
  </div>
  );
  
};

export default FeaturedTourList;