import React, { useState, useContext } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [credentials, setCredentials] = useState({
        userId: '01',
        userEmail: 'example@gmail.com',
        fullname: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const ServiceFee = 10;
    const totalAmount = Number(price) * Number(credentials.guestSize) + Number(ServiceFee);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user) {
            return; // Prevent submission if not logged in
        }
        
        // Navigate to payment page with tour and booking details
        navigate('/payment', {
            state: {
                tourDetails: tour,
                bookingDetails: credentials
            }
        });
    };

    // If user is not logged in, show authentication required message
    if (!user) {
        return (
            <div className='booking'>
                <div className='booking_top d-flex align-items-center justify-content-between'>
                    <h3>
                        ${price} <span>/per person</span>
                    </h3>
                    <span className='tour_rating d-flex align-items-center'>
                        <i className='ri-star-fill'></i>
                        {avgRating === 0 ? null : avgRating} ({reviews?.length})
                    </span>
                </div>

                <div className='auth_required_message'>
                    <div className='auth_icon'>
                        <i className='ri-lock-line'></i>
                    </div>
                    <h4>Authentication Required</h4>
                    <p>Please login or register to book this tour</p>
                    <div className='auth_buttons'>
                        <Link to='/login' className='btn secondary_btn'>
                            <i className='ri-login-box-line'></i> Login
                        </Link>
                        <Link to='/register' className='btn primary_btn'>
                            <i className='ri-user-add-line'></i> Register
                        </Link>
                    </div>
                    <div className='auth_info'>
                        <p><i className='ri-information-line'></i> New users must register first, then login to book tours</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='booking'>
            <div className='booking_top d-flex align-items-center justify-content-between'>
                <h3>
                    ${price} <span>/per person</span>
                </h3>
                <span className='tour_rating d-flex align-items-center'>
                    <i className='ri-star-fill'></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            {/* ================ Booking Form ================ */}
            <div className='booking_form'>
                <h5>Information</h5>
                <div className='user_info_display'>
                    <p><strong>Welcome, {user.username}!</strong></p>
                    <p>You are logged in and can book this tour</p>
                </div>
                <Form className='booking_info-form' onSubmit={handleSubmit}>
                    <FormGroup>
                        <input
                            type='text'
                            placeholder='Full Name'
                            id='fullname'
                            required
                            onChange={handleChange}
                            defaultValue={user.username}
                        />
                    </FormGroup>

                    <FormGroup>
                        <input
                            type='number'
                            placeholder='Phone'
                            id='phone'
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input
                            type='date'
                            placeholder=''
                            id='bookAt'
                            required
                            onChange={handleChange}
                        />
                        <input
                            type='number'
                            placeholder='Guest'
                            id='guestSize'
                            required
                            onChange={handleChange}
                        />
                    </FormGroup>

                    <Button className='btn primary_btn w-100 mt-4' type='submit'>
                        Book Now
                    </Button>
                </Form>
            </div>

            {/* ================ Booking Summary ================ */}
            <div className='booking_bottom'>
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>
                            ${price} <i className='ri-close-line'></i> {credentials.guestSize} Guest(s)
                        </h5>
                        <span> ${price}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Charge</h5>
                        <span> ${ServiceFee}</span>
                    </ListGroupItem>
                    <ListGroupItem className='border-0 px-0 total'>
                        <h5>Total</h5>
                        <span> ${totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>
    );
};

export default Booking;