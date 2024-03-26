import React from 'react'
import './Testinomial.css'
import testinomailimg1 from '../../assets/img/testimonials/img1.jpg'
import testinomailimg2 from '../../assets/img/testimonials/img2.jpg'
import testinomailimg3 from '../../assets/img/testimonials/img3.jpg'

const Testinomial = () => {
    return (
        <>
            <div className="testimonial-section">
                <div className="container text-center">
                    <div className="text-center p-4 t-head">
                        <h1>Testimonial</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-indicators mt-4 ">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                </div>
                                <div className="carousel-inner text-center">
                                    <div className="carousel-item active">
                                        <div className="c-content">
                                            <img src={testinomailimg1} className="d-block" alt="..." />
                                            <h3>Riasat</h3>
                                            <p className='w-75 mx-auto w'>In this digital world. I help people in build there business and brand digitally which helps in the many thing like:Brand building, more seling etc.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="c-content">
                                            <img src={testinomailimg2} className="d-block" alt="..." />
                                            <h3>Ayesha</h3>
                                            <p className='w-75 mx-auto'>In this digital world. I help people in build there business and brand digitally which helps in the many thing like:Brand building, more seling etc.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="c-content">
                                            <img src={testinomailimg3} className="d-block" alt="..." />
                                            <h3>Malik Sajjad </h3>
                                            <p className='w-75 mx-auto'>In this digital world. I help people in build there business and brand digitally which helps in the many thing like:Brand building, more seling etc.
                                            </p>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testinomial
