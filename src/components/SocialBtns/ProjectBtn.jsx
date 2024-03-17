import React from 'react'
import './Socialbtn.css'
import github from '../../assets/img/svg/github.svg'
import liveDemoimg from '../../assets/img/svg/live.png'

const ProjectBtn = ({ Livelink }) => {
    return (
        <>
            <div className="socialLinks mt-3 d-flex align-items-center justify-content-center  d-md-flex align-items-md-start justify-content-md-start  ">
                <div className="sociallink"><a href={Livelink} target='_'> <img src={liveDemoimg} alt="" style={{ filter: 'invert()' }} /></a></div>
                <div className="sociallink"><a href='#' target='_'> <img src={github} alt="" /></a></div>
            </div>
        </>
    )
}

export default ProjectBtn
