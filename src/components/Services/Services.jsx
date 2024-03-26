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
                            <p className='w-75 mx-auto' style={{ color: 'var(--color-grey-2)' }}> My journey begins with a foundation built on curiosity and a hunger for innovation. Armed with a diverse skill set encompassing HTML, CSS, JavaScript, and beyond, I embark on crafting digital experiences that seamlessly merge form and function. From responsive design principles to the intricacies of backend development, . </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 text-center d-flex  lign-items-center justify-content-center mt-5">
                            <ServiceCard webdev={webdev} serviceName="Web Development" serviceDes='In this digital world. I help people in build there business and brand digitally which helps in the many thing like:Brand building, more seling etc.'></ServiceCard>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center d-flex  lign-items-center justify-content-center mt-5">
                            <ServiceCard webdev={ui} serviceName="Ui / Ux" serviceDes="I am a Fresher web designer. I have make different design with different ideas. I today' s rat race new fresher have more mind blowing ideas with more expoloring ideas."></ServiceCard>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center d-flex  lign-items-center justify-content-center mt-5">
                            <ServiceCard webdev={seo} serviceName="Web Seo" serviceDes='LI provide SEO in every business for getting there business in first ,which helps people to make stand there business in google search first.'></ServiceCard>
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
