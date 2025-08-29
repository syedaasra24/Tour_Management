import React, { useRef, useState } from 'react';
import './search-bar.css';
import { Col, Form, FormGroup } from 'reactstrap';

import { BASE_URL } from './../utils/config';
import {useNavigate} from 'react-router-dom';

const SearchBar = () => {
    const locationRef = useRef('');
    const [cost, setCost] = useState(0); // Set initial cost
    const maxGroupSizeRef = useRef(0);
    const navigate = useNavigate()

    const searchHandler = async() => {
        const location = (locationRef.current.value || '').trim();
        const maxGroupSize = (maxGroupSizeRef.current.value || '').toString().trim();

        if (location === "" || cost === "" || maxGroupSize === "") {
            return alert('All fields are required!');
        }

        navigate(`/tours?city=${encodeURIComponent(location)}&distance=${encodeURIComponent(cost)}&maxGroupSize=${encodeURIComponent(maxGroupSize)}`);
    };

    // Increment and decrement functions for cost
    const incrementCost = () => {
        setCost(prevCost => Math.min(Number(prevCost) + 1000, 10000000));
    };

    const decrementCost = () => {
        setCost(prevCost => Math.max(Number(prevCost) - 1000, 0));
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
                                    min={0}
                                    max={10000000}
                                    step={1000}
                                    onChange={(e) => {
                                        const val = Number(e.target.value);
                                        if (Number.isNaN(val)) { setCost(0); return; }
                                        setCost(Math.max(0, Math.min(val, 10000000)));
                                    }}
                                    className='cost-input'
                                />
                                <button type='button' className='cost-btn' onClick={incrementCost}>+</button>
                            </div>
                        </div>
                    </FormGroup>

                    {/* max-person Section */}
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className='ri-group-line'></i></span>
                        <div>
                            <h6>Max person</h6>
                            <input type='number' placeholder='0' ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>

                    {/* date Section */}
                    <FormGroup className='d-flex gap-3 form_group form_group-fast'>
                        <span><i className="ri-calendar-line"></i></span>
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