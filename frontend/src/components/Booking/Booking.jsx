import React from 'react'
import './booking.css';
import { From, FromGroup, ListGroup, ListGroupItem, Button} from "reactstrap";

const Booking = ({ tour, avgRating }) => {
      
    const {price, reviews} = tour ;


    const handleChange = e => {};


  return (
    <div className= "booking"> 
       <div className= "booking_top.d-flex.align-items-center.justify-content-between">
              <h3>${price} <span>/per person</span></h3>
              <span className="tour_rating d-flex align-items-center ">
                <i
                  class="ri-star-s-fill"
                  ></i>
                  {avgRating === 0 ? null : avgRating} ( {reviews ?.length})
            
              </span>
       </div>


       <div className="booking_form">
        <h5>Information</h5>
        <From className="booking_info-form">
            <FromGroup>
              <input type="text" placeholder="Full Name" id="fullName" required onChange={handleChange} />
            </FromGroup>
            <FromGroup>
              <input type="number" placeholder="Phone" id="phone" required onChange={handleChange} />
            </FromGroup>
            <FromGroup className="d-flex align-items-center gap-3">
              <input type="date" placeholder="" id="bookAt" required onChange={handleChange} />
              <input type="number" placeholder="Guest" id="guestSize" required onChange={handleChange} />
            </FromGroup>
        </From>
       </div>
    </div>
  );
  };

export default Booking;
