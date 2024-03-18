import React from 'react'
import './About.css'
import Socialbtn from '../SocialBtns/Socialbtn'
import AboutCard from './AboutCard'
import ProgressBar from '../ProgressBar/ProgressBar'
import MainHead from '../MainHeading/MainHead'
import TimeLineCard from './TimeLineCard'

const About = () => {
    return (
        <>

            {/* About section  */}
            <section id="about">
                <div className="container ">
                    <MainHead firstpra='About' secondpra='Me' content='My Data'></MainHead>
                    <div className="row mt-5 ">
                        <div className="col-lg-6 col-12 text-center text-lg-start abtme ">
                            <h2>Who <span>I'm</span>?</h2>
                            <p className='mb-5 '> And I am 18 years young boy with dynamic and enthusiastic person looking for the job Web Design
                                and Development mostly specializing in front end development. A firm believer in my own
                                abilities, I am also a team player who thrives in a challenging environment.I am a fresher with
                                new and dynamics project ideas. Well-versed in numerous programming languages including
                                <span>HTML5</span>,<span>PHP</span>,<span>React Js</span>,<span>JavaScript</span> and strong
                                background in project management and customer relations.
                                <br />
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam repudiandae saepe quidem modi
                                placeat doloremque culpa veniam magnam repellendus vel.
                            </p>
                            <Socialbtn></Socialbtn>

                        </div>
                        <div className="col-lg-6 col-12 d-flex flex-wrap mt-4 ">
                            <AboutCard title={500} des="Projest Completed "></AboutCard>
                            <AboutCard title={6} des="Month of  Experience "></AboutCard>
                            <AboutCard title={600} des="Happy and Good  Clients "></AboutCard>
                            <AboutCard title={2000} des="Customer reviews "></AboutCard>

                        </div>
                    </div>
                    <hr />
                </div>

                {/* Skills section  */}
                <div className="container mt-3 py-4">
                    <div className="row">
                        <div className="col-12 text-center">
                            <MainHead firstpra='My' secondpra='Skills' content='My Skills'></MainHead>
                        </div>
                    </div>
                    <div className="row my-5 d-flex justify-content-between align-items-center">
                        <div className="col-lg-6 text-center text-md-start ">
                            <h1 className='mb-4'>Why Choose <span style={{ color: '#27AE60' }}>Me</span> ?</h1>
                            <p style={{ color: 'var(--color-grey-2)' }}>Since beginning my journey as a freelance developer nearly 1 years ago, I’ve done remote work for agencies, consulted for startups, and collaborated with talented people to create web products for both business and consumer use.I create successful responsive websites that are fast, easy to use, and built with best practices. The main area of my expertise is front-end development, HTML, CSS, JS, building small and medium web apps, custom plugins, features, animations, and coding interactive layouts.
                                I also have full-stack developer experience with popular open-source like (MERN Stack and others) </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="row ">
                                <ProgressBar name='HTML5' prencentage={100}></ProgressBar>
                                <ProgressBar name='CSS' prencentage={80}></ProgressBar>
                                <ProgressBar name='JavaScript' prencentage={70}></ProgressBar>
                                <ProgressBar name='React Js' prencentage={50}></ProgressBar>
                                <ProgressBar name='Next Js' prencentage={80}></ProgressBar>
                                <ProgressBar name='Node Js' prencentage={75}></ProgressBar>
                                <ProgressBar name='Web Seo' prencentage={78}></ProgressBar>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>


                {/* TimeLine section  */}
                <div className="container mt-3 py-5 ">
                    <div className="row">
                        <div className="col-12 text-center timeline">
                            <MainHead firstpra='My' secondpra='TimeLine' content='My Data'></MainHead>
                            <p className="timepra mx-auto my-5 ">Born in a small town, I spent my early years exploring nature and developing a love for learning. In school, I discovered a passion for writing and storytelling, which led me to pursue a degree in English literature. Throughout my university years, I immersed myself in various literary works and honed my writing skills. </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 ">
                            <TimeLineCard CourseName="Computer Science" Date="01-05-20021" dueDate='01-05-2023' college="Punjab College Okara" des="Having completed the intermediate level, you've solidified your foundational knowledge and are now equipped with a deeper understanding of various subjects. You've honed critical skills, developed problem-solving abilities, and gained confidence in tackling more complex challenges. With this milestone achieved, you're primed to embark on advanced studies or pursue professional opportunities with a strong base to build upon!"></TimeLineCard>
                        </div>
                        <div className="col-lg-6 col-12">
                            <TimeLineCard CourseName="Web Development" Date="01-08-20023" dueDate='01-05-2024' college="IDEO College" des="After completing your journey in web development, you've emerged as a proficient developer with a comprehensive skill set. You've mastered languages like HTML, CSS, and JavaScript, along with frameworks and libraries such as React, Angular, or Vue.js. Your understanding of backend technologies like Node.js, or Ruby on Rails allows you to create dynamic and interactive web applications!"></TimeLineCard>
                        </div>
                        <div className="col-lg-6 col-12">
                            <TimeLineCard CourseName="UI / UX Designing" Date="01-08-20023" dueDate='01-05-2024' college="Flux Accadmey" des="After completing your journey in UI/UX design, you've emerged as a skilled architect of user-centric digital experiences. You've mastered the art of blending aesthetics with functionality, creating intuitive interfaces that delight users and drive engagement. Your expertise in user research, wireframing, and prototyping enables you to craft seamless user journeys that prioritize usability and accessibility. You're adept at incorporating design principles such as hierarchy, typography, and color theory to create visually compelling layouts that resonate with target audiences."></TimeLineCard>
                        </div>
                        <div className="col-lg-6 col-12">
                            <TimeLineCard CourseName="Web Seo" Date="01-01-20024" dueDate='01-05-2024' college="YouTube" des="After completing your journey in web SEO, you've become a seasoned strategist in enhancing online visibility and driving organic traffic to websites. You've delved deep into the intricacies of search engine algorithms, mastering techniques to optimize content, meta tags, and site structure for improved rankings. Your expertise extends to keyword research, competitor analysis, and link building strategies, allowing you to craft compelling SEO campaigns tailored to specific audiences. You're proficient in leveraging analytics tools to track performance metrics, refine strategies, and deliver measurable results"></TimeLineCard>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
