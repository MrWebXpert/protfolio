import React from 'react'
import './Services.css'
import webdev from '../../assets/img/svg/coding.png'
import ui from '../../assets/img/svg/ui.png'
import seo from '../../assets/img/svg/seo.png'
import MainHead from '../MainHeading/MainHead'
import ServiceCard from './ServiceCard'
import Testinomial from './Testinomial'

const Services = () => {
    return (
        <>
            <section id="services" className='ServiceSection'>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 mt-4">
                            <MainHead firstpra='My' secondpra='Services'></MainHead>
                            <p style={{ color: 'var(--color-grey-2)' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, fuga!<br />Lorem ipsum dolor sit
                                amet consectetur.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 text-center d-flex  lign-items-center justify-content-center mt-5">
                            <ServiceCard webdev={webdev} serviceName="Web Development" serviceDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil ratione libero odio
                    eum reprehenderit!'></ServiceCard>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center d-flex  lign-items-center justify-content-center mt-5">
                            <ServiceCard webdev={ui} serviceName="Ui / Ux" serviceDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil ratione libero odio
                    eum reprehenderit!'></ServiceCard>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center d-flex  lign-items-center justify-content-center mt-5">
                            <ServiceCard webdev={seo} serviceName="Web Seo" serviceDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nihil ratione libero odio
                    eum reprehenderit!'></ServiceCard>
                        </div>
                    </div>
                    <Testinomial></Testinomial>
                    <hr />
                </div>
            </section>
        </>
    )
}

export default Services
