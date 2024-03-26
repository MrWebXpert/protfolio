import React from 'react'
import portimg from '../../assets/img/port/port (2).png'
import portimg1 from '../../assets/img/port/port1.jpg'
import portimg2 from '../../assets/img/port/port.png'
import PortfolioCard from './PortfolioCard'
import MainHead from '../MainHeading/MainHead'

const Portfolio = () => {
    return (
        <>

            {/* <!-- Portfolio section  --> */}
            <section id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center my-5 ">
                            <div className="about-head">
                                <MainHead firstpra='My' secondpra='Portfolio'></MainHead>
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
                            <PortfolioCard portImg={portimg} projectName='OneShot App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.' Livelink='https://oneshot-app.netlify.app'> </PortfolioCard>
                        </div>
                        <div className="col-md-4 col-12 ">
                            <PortfolioCard portImg={portimg2} projectName='Video Player App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.' Livelink='https://mrwebxpert.vercel.app'></PortfolioCard>
                        </div>
                        <div className="col-md-4 col-12 ">
                            <PortfolioCard portImg={portimg1} projectName='Video Player App' projectDes='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eligendi esse sed nesciunt aspernatur porro quibusdam ratione, cumque dolor minus.' Livelink='https://oneshot-app.netlify.app'></PortfolioCard>
                        </div>
                    </div>
                    <hr />
                </div>
            </section >
        </>
    )
}

export default Portfolio
