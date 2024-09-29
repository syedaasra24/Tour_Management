import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png';

const servicesData =[
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Offers real-time weather updates for your location, helping you plan your day with accurate forecasts and essential weather information at your fingertips.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Connects travelers with expert local guides, ensuring unforgettable experiences through personalized insider knowledge of the hidden gems. ',
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Allows you to tailor your travel experience to your preferences, offering personalized activities that match your interests, ensuring the best journey.',
    },
]

const ServiceList = () => {
  return (
  <>
    {
        servicesData.map((item,index) => (
        <Col lg='3' key={index}>
        <ServiceCard item = {item} />
        </Col>
    ))}
  </>
  );
};

export default ServiceList;
