import React from 'react'
import './Socialbtn.css'
import fb from '../../assets/img/svg/facebook.svg'
import insta from '../../assets/img/svg/insta.svg'
import github from '../../assets/img/svg/github.svg'
import twiter from '../../assets/img/svg/twiter.svg'

const Socialbtn = () => {
    return (
        <>
            <div className="socialLinks mt-3 d-flex align-items-center justify-content-center  d-md-flex align-items-md-start justify-content-md-start  ">
                <div className="sociallink"><a href="https://www.facebook.com/profile.php?id=61551628628750&mibextid=ZbWKwL" target='_'><img src={fb} alt="" /></a></div>
                <div className="sociallink"><a href="https://x.com/mr_hammadsandhu?t=4tIY4h_bKJ4Wp17MNA2mCg&s=09"> <img src={insta} alt="" /></a></div>
                <div className="sociallink"><a href="#"> <img src={twiter} alt="" /></a></div>
                <div className="sociallink"><a href="#"> <img src={github} alt="" /></a></div>
            </div>
        </>
    )
}

export default Socialbtn
