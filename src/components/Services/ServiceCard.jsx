import React from 'react'
import './ServiceCard.css'

const ServiceCard = ({ webdev, serviceName, serviceDes }) => {
    return (
        <>
            <div className="servicesCard">
                <div className="icon py-3">
                    <span><img src={webdev} className='img-fluid ' /></span>
                </div>
                <h3>{serviceName}</h3>
                <p>{serviceDes}</p>
            </div>
        </>
    )
}

export default ServiceCard
