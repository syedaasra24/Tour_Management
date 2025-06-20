import React, { useContext, useEffect, useRef, useState } from 'react';
import { Form } from 'reactstrap';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { calculateAvgRating } from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from './../shared/Newsletter';
import useFetch from "./../hooks/usefetch";
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import '../styles/tour-details.css';

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef();
  const [tourRating, setTourRating] = useState(null);
  const { user } = useContext(AuthContext);
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  // Destructure tour data if available
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour || {};
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Format date for review display
  const dateFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

  // Handle review submission
  const submitHandler = async (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value.trim();

    

    try {
      if (!user) {
        alert('Please Sign in to submit a review');
        return;
      }
  
      if (!reviewText || !tourRating) {
        alert('Please fill out all fields and select a rating');
        return;
      }
  
      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating,
      };

      const res = await fetch(`${BASE_URL}/review/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(reviewObj),
      });

      const result = await res.json();
      if (!res.ok) {
        return alert(result.message);
      }

      alert(result.message);
      reviewMsgRef.current.value = ''; // Optionally clear the input
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  return(
    <>
    <section>
      <Container>
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
        {error && <h4 className="text-center pt-5">{error}</h4>}

        {!loading && !error && tour && (
          <Row>
            <Col lg="8">
              <div className="tour_content">
                {photo && <img src={photo} alt={title} />}
                <div className="tour_info">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <h5>Price: ${price}</h5>
                  <h5>Location: {city}, {distance} km</h5>
                  <h5>Max Group Size: {maxGroupSize}</h5>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour_rating d-flex align-items-center gap-1">
                      <i className="ri-star-s-fill" style={{ color: 'black' }}></i>
                      {avgRating !== 0 ? avgRating : 'Not Rated'}
                      {reviews?.length > 0 && <span>{reviews.length}</span>}
                    </span>

                    <span>
                      <i className="ri-map-pin-fill"></i> {address}
                    </span>
                  </div>

                  <div className="tour_extra-details">
                    <span><i className="ri-map-pin-2-line"></i> {city}</span>
                    <span><i className="ri-money-dollar-circle-line"></i> ${price} / per person</span>
                    <span><i className="ri-map-pin-time-line"></i> {distance} km</span>
                    <span><i className="ri-group-line"></i> {maxGroupSize} people</span>
                  </div>

                  <h5>Description</h5>
                  <p>{desc}</p> 
                </div>

                {/*=============== Tour reviews section ========== */}
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length || 0} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} onClick={() => setTourRating(star)} style={{ cursor: 'pointer' }}>
                          {star} <i className="ri-star-s-fill"></i>
                        </span>
                      ))}
                    </div>

                    <div className="review_input">
                      <input type="text" ref={reviewMsgRef} placeholder="Share your thoughts" required />
                      <button className="btn primary_btn text-white" type="submit">Submit</button>
                    </div>
                  </Form>

                  <ListGroup className="user_reviews">
                    {reviews?.map((review) => (
                      <div key={review._id} className="review_item">
                        <img src={avatar} alt={review.username} />
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString('en-US', dateFormatOptions)}</p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating} <i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        )}
    </Container>
      <Newsletter />
    </section>
    </>
  );
};

export default TourDetails;
