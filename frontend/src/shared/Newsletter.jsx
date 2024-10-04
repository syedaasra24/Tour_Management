import React from 'react'

import './newsletter.css'
import maleTourist from '../assets/images/maleTourist.jpg'

import {Container, Row, Col} from 'reactstrap'
// import maleTourist from '../assets/images/male-tourist.png'

const Newsletter=() => {
  return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter_content">
                        <h2>Subscribe now to get useful travelling information.</h2>

                        <div className="newsletter_input">
                            <input type="email" placeholder='Enter Your Email'/>
                            <button className="btn newsletter_btn">Subscribe</button>
                        </div>
                        <p>"Explore breathtaking destinations with tailored travel experiences. 
                        Book your dream adventure today and create unforgettable memories!"</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter_img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter;
