import React, { useRef, useState } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

// import { BASE_URL } from '../utils/config';
// import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
    const locationRef = useRef('');
    const [cost, setCost] = useState(50000); // Set initial cost
    const maxGroupSizeRef = useRef(0);

    const searchHandler = () => {
        const location = locationRef.current.value;
        const maxGroupSize = maxGroupSizeRef.current.value;

        if (location === '' || cost === 0 || maxGroupSize === '') {
            return alert('All fields are required!');
        }

        // You can handle the search logic here
        // console.log(Searching for ${location} with cost ₹${cost} for ${maxGroupSize} people.);   
         };

    // Increment and decrement functions for cost
    const incrementCost = () => {
        setCost(prevCost => Math.min(prevCost + 1000, 10000000)); // Max limit 10,000,000
    };

    const decrementCost = () => {
        setCost(prevCost => Math.max(prevCost - 1000, 50000)); // Min limit 40,000
    };

    return (
        <Col lg='12'>
            <div className='search_bar'>
            {/* location section*/}
                <Form className='d-flex align-items-center gap-4'>
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className='ri-map-pin-line'></i></span>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='Where are you going?' ref={locationRef} />
                        </div>
                    </FormGroup>

                    {/* Cost Section */}
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className="ri-money-rupee-circle-line"></i></span>
                        <div>
                            <h6>Cost</h6>
                            <div className='cost-input-container'>
                                <button type='button' className='cost-btn' onClick={decrementCost}>-</button>
                                <input
                                    type='number'
                                    value={cost}
                                    readOnly
                                    className='cost-input'
                                />
                                <button type='button' className='cost-btn' onClick={incrementCost}>+</button>
                            </div>
                        </div>
                    </FormGroup>

                    {/* Cost Section */}
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className='ri-group-line'></i></span>
                        <div>
                            <h6>Max person</h6>
                            <input type='number' placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    {/* date Section */}

                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i class="ri-calendar-line"></i></span>
                        <div>
                            <h6>Select Your Date</h6>
                            <input type='date'/>
                        </div>
                    </FormGroup>

                    <span className='search_icon' type='submit' onClick={searchHandler}>
                        <i className='ri-search-line'></i>
                    </span>
                </Form>
            </div>
        </Col>
    );
};

export default SearchBar;