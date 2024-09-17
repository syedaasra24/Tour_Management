import React from 'react';
import './service-card.css';


const ServiceCard = () => {
    const { imgUrl , title , desc } = item

    return <div className='service-item'>
        <div className='service_img'>
            <img src={imgUrl} at=''/>
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>


}

export default ServiceCard;
