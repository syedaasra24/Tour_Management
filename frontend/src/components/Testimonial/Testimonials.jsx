import React from 'react';
import Slider from 'react-stick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/ava-5.jpg';
import './testimonials.css'; // Custom CSS for the slider

const testimonialsData = [
  {
    message: 'An amazing experience! Everything was perfectly organized, and the destinations were absolutely stunning. Highly recommend!',
    name: 'Aarav',
    image: ava01,
  },
  {
    message: 'Perfectly planned itineraries and great customer service. Couldn\'t have asked for a better vacation.',
    name: 'Ethan',
    image: ava02,
  },
  {
    message: 'Absolutely loved the journey! Great destinations, superb accommodations, and excellent guidance.',
    name: 'Oliver',
    image: ava03,
  },
  {
    message: 'The trip exceeded all my expectations! Loved every moment, from start to finish.',
    name: 'Sophia',
    image: ava04,
  },
  {
    message: 'From booking to the final day of the trip, everything was flawless. I\'ll definitely travel with them again!',
    name: 'Emma',
    image: ava05,
  },
];

const Testimonials = () => {
  const settings = {
    dots: "true",
    infinite: "true",
    autoplay: "true",
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3, // Show 3 testimonials at once to keep it compact
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="testimonials-slider-horizontal">
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonial-item-horizontal">
          <p>{testimonial.message}</p>
          <div className="testimonial-content d-flex align-items-center gap-4">
            <img src={testimonial.image} className="testimonial-img-horizontal rounded-circle" alt={testimonial.name} />
            <div>
              <h6>{testimonial.name}</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
