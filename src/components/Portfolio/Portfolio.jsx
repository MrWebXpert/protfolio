import React from 'react'
import portimg from '../../assets/img/port/port (2).png'
import portimg2 from '../../assets/img/port/port (3).jpg'
import portimg3 from '../../assets/img/port/port (4).png'
import portimg4 from '../../assets/img/port/port (5).jpg'
import portimg5 from '../../assets/img/port/port (6).png'
import portimg6 from '../../assets/img/port/port (7).jpg'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
    return (
        <>

            {/* <!-- Portfolio section  --> */}
            <section id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5 ">
                            <div className="about-head">
                                <h1>My <span>Portfolio</span></h1>
                                <p className="w-75  mx-auto my-5 " style={{ color: 'var(--color-grey-2)' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
                                    perferendis vero et at cupiditate alias natus ipsam voluptate quae ducimus! Minus odio
                                    nostrum ullam ut ratione inventore eum quisquam blanditiis.</p>
                            </div>
                        </div>
                        <div className="col-12 my-3">
                            <h2>My Recent Work</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12 ">
                            <PortfolioCard portImg={portimg} projectName='OneShot App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.' Livelink={'https://oneshot-app.netlify.app'}> </PortfolioCard>
                        </div>
                        <div className="col-md-4 col-12 ">
                            <PortfolioCard portImg={portimg2} projectName='Video Player App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.'></PortfolioCard>
                        </div>
                        <div className="col-md-4 col-12 ">
                            <PortfolioCard portImg={portimg3} projectName='E-Commrace App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.'></PortfolioCard>
                        </div>
                        <div className="col-md-4 col-12 ">
                            <PortfolioCard portImg={portimg4} projectName='Graphic Designing App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.'></PortfolioCard>
                        </div>
                        <div className="col-md-4 col-12 ">
                            <PortfolioCard portImg={portimg5} projectName='E-Commrace App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.'></PortfolioCard>
                        </div>
                        <div className="col-md-4 col-12 ">
                            <PortfolioCard portImg={portimg6} projectName='Admin DashBoard App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.'></PortfolioCard>
                        </div>
                    </div>
                    <hr />
                </div>
            </section >
        </>
    )
}

export default Portfolio
