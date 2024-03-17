import React from 'react'
import './PortfolioCard.css'
import ProjectBtn from '../SocialBtns/ProjectBtn'

const PortfolioCard = ({ portImg, projectName, projectDes }) => {
    return (
        <>
            <div className="portfolio-item">
                <div className="image">
                    <img src={portImg} alt="" />
                </div>
                <div className="hover-items text-center px-1">
                    <h2>{projectName}</h2>
                    <p>{projectDes}</p>
                    <ProjectBtn></ProjectBtn>
                </div>
            </div>
        </>
    )
}

export default PortfolioCard
