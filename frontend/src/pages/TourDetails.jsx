import React from 'react';
import '../styles/tour-details.css'
import { Container, Row,Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import { calculateAvgRating } from '../utils/avgRating';

const TourDetails = () => {

  const {id}= useParams()

  const tour = tourData.find(tour=> tour.id === id)

  const {photo, title, desc,price, address, reviews,city,distance,maxGroupSize}= tour;
   
  const {totalRating, avgRating} = calculateAvgRating(reviews)



  return( 
  <>
  <section>
    <Container>
      <Row>
        <Col lg="8">
        <div className="tour_content">
          <img src={photo} alt="" />
          <div className="tour_info">
            <h2>{title}</h2>
            <h2>{desc}</h2>
            <h2>{price}</h2>
            <h2>{reviews}</h2>
            <h2>{city}</h2>
            <h2>{distance}</h2>
            <h2>{maxGroupSize}</h2>
            <div className="d-flex align-items-center gap-5">
              <span className="d-flex align-items-center gap-1">
                <i class="ri-star-s-fill" style={{'color':"black"}}></i>
                {calculateAvgRating === 0 ? null : avgRating}
                {totalRating === 0 ? ("Not Rated") : (
                  <span>({reviews?.length})</span>
                )}
              </span>
              
               <span>
                <i class="ri-map-pin-fill"></i> {address}
               </span>

            </div>
            
          <div className="tour_extra-details">
            <span><i class="ri-map-pin-2-line"></i> {city}</span>
            <span><i class="ri-money-dollar-circle-line"></i> ${price} / per person</span>
            <span><i class="ri-group-line"></i> {maxGroupSize}</span>
          </div>
                 <h5>description</h5>
                 <p>{desc}</p>
          </div>
        </div>

        </Col>
      </Row>
    </Container>
  </section>

  </>
  
)};

export default TourDetails;