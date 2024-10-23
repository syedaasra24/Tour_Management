import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
    const { price, reviews } = tour;
    const navigate = useNavigate();

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
        // You can add booking logic here, like sending data to a server.

        navigate('/Thank-You'); // Navigate to a thank-you page after submission
    };

    return (
        <div className='booking'>
            <div className='booking_top d-flex align-items-center justify-content-between'>
                <h3>
                    ${price} <span>/per person</span>
                </h3>
                <span className='tour_rating d-flex align-items-center'>
                    <i className='ri-star-s-fill'></i>
                    {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            {/* ================ Booking Form ================ */}
            <div className='booking_form'>
                <h5>Information</h5>
                <Form className='booking_info-form' onSubmit={handleSubmit}>
                    <FormGroup>
                        <input
                            type='text'
                            placeholder='Full Name'
                            id='fullname'
                            required
                            onChange={handleChange}
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
