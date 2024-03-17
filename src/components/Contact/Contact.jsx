import React, { useState } from 'react'
import './Contact.css'
import SocialBtns from '../SocialBtns/Socialbtn'
import locationImg from '../../assets/img/svg/location-pin.svg'
import mobileImg from '../../assets/img/svg/mobile.svg'
import envelopeImg from '../../assets/img/svg/envelope.svg'
import axios from 'axios'

const Contact = () => {
    const [email, setEmail] = useState({
        sendername: "",
        email: "",
        msg: ""
    })

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setEmail({ ...email, [name]: value })

    }

    const onSubmintHandler = async (e) => {
        e.preventDefault();
        try {
            const data = {
                email: email.email,
                sendername: email.sendername,
                msg: email.msg,
            }
            await axios.post('https://protfolio-backend-three.vercel.app/api/v1/home', data)
            console.log(data)
        } catch (err) {
            console.log(err)
        }

        setEmail({
            sendername: "",
            email: "",
            msg: ""
        })
    }
    return (
        <>
            <section id="contact">
                <div className="contact">
                    <div className="container">
                        <div className="row text-center pt-5">
                            <div className="col-12 contactData">
                                <h4>Let's Start a Conversation!</h4>
                                <h1>Contact <span>Me</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <h5>Contact Info</h5>
                                <div className="info-item">
                                    <span><img src={locationImg} alt="" /></span>
                                    <p><a href="#">Okara Cant</a></p>
                                </div>
                                <div className="info-item">
                                    <span><img src={mobileImg} alt="" /></span>
                                    <p><a href="#">+92 3097369603</a></p>
                                </div>
                                <div className="info-item">
                                    <span><img src={envelopeImg} alt="" /></span>
                                    <p><a href="#">mrhammadsandhu07@gmail.com</a></p>
                                </div>
                                <SocialBtns></SocialBtns>
                            </div>
                            <div className="col-lg-7 col-12 mt-4">
                                <form action="" onSubmit={onSubmintHandler}>
                                    <div className="row d-flex align-align-items-center justify-content-start ">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name='sendername' value={email.sendername} placeholder="Enter your name" onChange={handleOnChange} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name='email' value={email.email} placeholder="Enter your Email" onChange={handleOnChange} required />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <div className="mb-3">
                                                    <textarea className="textarea" cols="30" rows="5" name='msg' required
                                                        placeholder="Enter your Message" onChange={handleOnChange} value={email.msg}></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Col-12">
                                            {/* <div className="contact-btn"> */}
                                            <button className='contact-btn'>Send Message</button>
                                            {/* </div> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
