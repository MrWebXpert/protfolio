import React from 'react'
import './MainHead.css'

const AboutHead = ({ firstpra, secondpra, content }) => {


    const dynamicStyles = {
        position: 'relative',
        fontSize: '80px',
        fontWeight: 900,
    };


    return (
        <>

            <div className="row">
                <div className="col-12 text-center my-5 ">
                    <div className="about-head">
                        <h1 style={dynamicStyles}>
                            {firstpra} <span>{secondpra}</span>
                            <span className="content-after">{content}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutHead;
