import React, { useState } from 'react'
import './AboutCard.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
const AboutCard = ({ title, des }) => {
    const [Count, setCount] = useState(false)
    return (
        <>
            <div className="col-sm-6 col-12">
                <div className="portCard">
                    <div className="abttext">
                        <div className="lgtext">
                            <ScrollTrigger onEnter={() => { setCount(true) }} onExit={() => { setCount(false) }}>
                                {Count && <CountUp start={0} end={title} duration={10} delay={0}>+</CountUp>} +
                            </ScrollTrigger>
                        </div>
                        <p className="smtext">
                            {des}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCard
