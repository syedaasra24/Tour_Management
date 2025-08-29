
import React from 'react';
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import { useLocation, useNavigate } from "react-router-dom";
import '../styles/thank-you.css'

const ThankYou = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const tourDetails = location.state?.tourDetails || {};
  const bookingDetails = location.state?.bookingDetails || {};

  const handleViewTours = () => {
    navigate('/tours');
  };

  const handleGoHome = () => {
    navigate('/home');
  };

  return (
    <div className="thank-you-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8">
            <div className="thank_you text-center">
              <div className="success-icon">
                <i className="ri-checkbox-circle-line"></i>
              </div>
              <h1 className="mb-3 fw-semibold">Payment Successful!</h1>
              <h3 className="mb-4">Your Tour Has Been Booked</h3>
              
              {tourDetails.title && (
                <Card className="booking-summary-card mb-4">
                  <CardBody>
                    <h4>Booking Summary</h4>
                    <div className="tour-info">
                      <img src={tourDetails.photo} alt={tourDetails.title} className="tour-image" />
                      <div className="tour-details">
                        <h5>{tourDetails.title}</h5>
                        <p><i className="ri-map-pin-line"></i> {tourDetails.city}</p>
                        <p><i className="ri-user-line"></i> {bookingDetails.guestSize} Guest(s)</p>
                        <p><i className="ri-calendar-line"></i> {bookingDetails.bookAt}</p>
                        <p><i className="ri-money-dollar-circle-line"></i> Total Paid: ${(tourDetails.price * bookingDetails.guestSize) + 10}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              )}

              <div className="action-buttons">
                <Button className="btn secondary_btn me-3" onClick={handleViewTours}>
                  <i className="ri-compass-line"></i> Explore More Tours
                </Button>
                <Button className="btn primary_btn" onClick={handleGoHome}>
                  <i className="ri-home-line"></i> Go to Home
                </Button>
              </div>

              <div className="confirmation-info mt-4">
                <p><i className="ri-mail-check-line"></i> A confirmation email has been sent to your registered email address</p>
                <p><i className="ri-customer-service-line"></i> Our support team will contact you within 24 hours with tour details</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ThankYou;
