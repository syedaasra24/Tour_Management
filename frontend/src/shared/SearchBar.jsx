import React ,{useRef, useState}from 'react';
import './search-bar.css'
import {Col , Form , FormGroup } from 'reactstrap';

const SearchBar = () => {

    const locationRef = useRef('')
    const [cost, setCost] = useState(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = ()=> {

        const location = locationRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value
        
        if(location === '' || cost === '0' || maxGroupSize === '') 
            {
            return alert('All fields are required !');
          }
    }
  return (
  <Col  lg= '12'>
    <div className='search_bar'>
      <Form className= 'd-flex align-items-center gap-4'>
        <FormGroup className='d-flex gap-3 form_group form_group-fast'>
            <span><i class='ri-map-pin-line'></i></span>
            <div>
              <h6>Location</h6>
              <input type ='text' placeholder='Where are you going ?' ref = {locationRef} />
            </div>
        </FormGroup>

        <FormGroup className='d-flex gap-3 form_group form_group-fast'>
            <span><i class="ri-money-rupee-circle-line"></i></span>           
            <div>
              <h6>cost</h6>
              <input type ='range' min='40000' max='10000000' step='1000' value={cost} on onChange={(e) => setCost(e.target.value)} />
              <span>₹{cost}</span>
            </div>
        </FormGroup>

        <FormGroup className='d-flex gap-3 form_group form_group-fast'>
            <span><i class='ri-group-line'></i></span>
            <div>
              <h6>Max People</h6>
              <input type ='number' placeholder='0' ref = {maxGroupSizeRef} />
            </div>
        </FormGroup>
        
        <span className='search_icon' type='submit' onClick={searchHandler}>
          <i class= 'ri-search-line'></i>
        </span>
        
      </Form>
    </div>
  </Col>
  );
};

export default SearchBar;