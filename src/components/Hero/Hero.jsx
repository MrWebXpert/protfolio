import React from 'react'
import './Hero.css'
import Socialbtn from '../SocialBtns/Socialbtn'
import HeroImg from '../../assets/img/Hero.jpeg'
import DownloadBtn from '../DownloadBtn/DownloadBtn'
import { Typewriter, Cursor } from 'react-simple-typewriter'

const Hero = () => {
    const text = Typewriter({
        words: ['Fornt-end Developer', 'Ui /UX Designer', ' & Web Seo Expert'],
        loop: {},
        typeSpeed: 120,
        delaySpeed: 80
    })
    return (
        <>
            <section className="hero" id="home">
                <div className="container ">
                    <div className="row d-flex align-items-center justify-content-evenly flex-column-reverse flex-lg-row">
                        <div className="col-lg-6 col-12">
                            <div className="d-flex flex-column bio ">
                                <h3 className="mb-4">Hello, it's Me</h3>
                                <h1 className="mb-1 text-center text-md-start ">Mr.Hammad.</h1>
                                <h2 className="mb-4 text-center text-md-start  ">And I'm a <span id="changingText">{text} <Cursor cursorStyle='|'></Cursor></span></h2>
                                <p className='text-center text-md-start '>And I am 18 years young boy with dynamic and enthusiastic person looking for the job Web Design and Development mostly specializing in front end development</p>
                            </div>
                            <Socialbtn></Socialbtn>
                            <DownloadBtn></DownloadBtn>
                        </div>
                        <div className="col-lg-6 col-12 bio-img text-center">
                            <img src={HeroImg} alt="" className="img-fluid float-md-end img" />
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
        </>
    )
}

export default Hero
