import React, { useState, useEffect, useContext, useMemo } from 'react';
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get tour and booking details from navigation state
  const tourDetails = useMemo(() => location.state?.tourDetails || {}, [location.state]);
  const bookingDetails = useMemo(() => location.state?.bookingDetails || {}, [location.state]);

  // Redirect if no tour details or user not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (!tourDetails.title) {
      navigate('/tours');
      return;
    }
  }, [user, tourDetails, navigate]);

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Navigate to thank you page with booking details
      navigate('/thank-you', {
        state: {
          tourDetails,
          bookingDetails,
          paymentSuccess: true
        }
      });
    }, 3000);
  };

  const calculateTotal = () => {
    const tourPrice = tourDetails.price || 0;
    const guestSize = bookingDetails.guestSize || 1;
    const serviceFee = 10;
    return (tourPrice * guestSize) + serviceFee;
  };

  if (!user || !tourDetails.title) {
    return null;
  }

  return (
    <div className="payment-page">
      <Container>
        <Row className="justify-content-center">
          <Col lg="8">
            <div className="payment-header text-center mb-5">
              <h1>Complete Your Booking</h1>
              <p>Secure payment for your amazing tour experience</p>
            </div>

            <Row>
              {/* Tour Summary */}
              <Col lg="6" className="mb-4">
                <Card className="tour-summary-card">
                  <CardBody>
                    <h4>Tour Summary</h4>
                    <div className="tour-info">
                      <img src={tourDetails.photo} alt={tourDetails.title} className="tour-image" />
                      <div className="tour-details">
                        <h5>{tourDetails.title}</h5>
                        <p><i className="ri-map-pin-line"></i> {tourDetails.city}</p>
                        <p><i className="ri-user-line"></i> {bookingDetails.guestSize} Guest(s)</p>
                        <p><i className="ri-calendar-line"></i> {bookingDetails.bookAt}</p>
                      </div>
                    </div>
                    
                    <div className="price-breakdown">
                      <div className="price-item">
                        <span>Tour Price:</span>
                        <span>${tourDetails.price} × {bookingDetails.guestSize}</span>
                      </div>
                      <div className="price-item">
                        <span>Service Fee:</span>
                        <span>$10</span>
                      </div>
                      <div className="price-item total">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              {/* Payment Form */}
              <Col lg="6">
                <Card className="payment-form-card">
                  <CardBody>
                    <h4>Payment Details</h4>
                    
                    {/* Payment Method Selection */}
                    <div className="payment-methods mb-4">
                      <h6>Select Payment Method</h6>
                      <div className="payment-options">
                        <label className="payment-option">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <span className="option-content">
                            <i className="ri-bank-card-line"></i>
                            Credit/Debit Card
                          </span>
                        </label>
                        
                        <label className="payment-option">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="polar"
                            checked={paymentMethod === 'polar'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <span className="option-content">
                            <i className="ri-wallet-3-line"></i>
                            Polar Wallet
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Payment Form */}
                    <form onSubmit={handlePayment}>
                      {paymentMethod === 'card' ? (
                        <div className="card-payment-form">
                          <div className="form-group">
                            <label>Card Number</label>
                            <input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              className="form-control"
                              required
                            />
                          </div>
                          
                          <Row>
                            <Col>
                              <div className="form-group">
                                <label>Expiry Date</label>
                                <input
                                  type="text"
                                  placeholder="MM/YY"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </Col>
                            <Col>
                              <div className="form-group">
                                <label>CVV</label>
                                <input
                                  type="text"
                                  placeholder="123"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </Col>
                          </Row>
                          
                          <div className="form-group">
                            <label>Cardholder Name</label>
                            <input
                              type="text"
                              placeholder="John Doe"
                              className="form-control"
                              defaultValue={user.username}
                              required
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="polar-payment-form">
                          <div className="polar-info">
                            <i className="ri-wallet-3-line polar-icon"></i>
                            <h5>Polar Wallet Payment</h5>
                            <p>Fast and secure payment through Polar</p>
                          </div>
                          
                          <div className="form-group">
                            <label>Polar ID</label>
                            <input
                              type="text"
                              placeholder="Enter your Polar ID"
                              className="form-control"
                              required
                            />
                          </div>
                          
                          <div className="form-group">
                            <label>Amount to Pay</label>
                            <div className="amount-display">
                              <span className="currency">$</span>
                              <span className="amount">{calculateTotal()}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="btn primary_btn w-100 mt-4"
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <>
                            <i className="ri-loader-4-line spinning"></i>
                            Processing Payment...
                          </>
                        ) : (
                          <>
                            <i className="ri-secure-payment-line"></i>
                            Pay ${calculateTotal()}
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="security-info mt-3">
                      <p><i className="ri-shield-check-line"></i> Your payment is secure and encrypted</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
