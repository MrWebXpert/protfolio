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
                            <p style={{ color: 'var(--color-grey-2)' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil quod autem minus libero doloribus impedit aliquam, assumenda illum officia et blanditiis obcaecati asperiores enim commodi corrupti ipsa! Provident laborum obcaecati exercitationem. Illum eos quo alias dolorum omnis sed sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam consequuntur exercitationem facere delectus? Illum animi corporis nostrum atque minima deserunt aut voluptates magnam ea labore tenetur, id, repellendus voluptatibus nihil!</p>
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
                            <p className="timepra mx-auto my-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                                saepe
                                et, tenetur dolor,
                                quibusdam labore, unde reprehenderit quidem sunt officiis laborum. Eum, quidem eligendi. Odit
                                fugit quidem illum eius excepturi!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-12 ">
                            <TimeLineCard CourseName="Computer Science" Date="01-05-20021" dueDate='01-05-2023' college="Punjab College Okara" des="sit aliquid, laudantium facere officiis. Quaerat, quos qui!sit aliquid, laudantium facere officiis. Quaerat, quos qui!sit aliquid.!"></TimeLineCard>
                        </div>
                        <div className="col-lg-6 col-12">
                            <TimeLineCard CourseName="Web Development" Date="01-08-20023" dueDate='01-05-2024' college="IDEO College" des="sit aliquid, laudantium facere officiis. Quaerat, quos qui!sit aliquid, laudantium facere officiis. Quaerat, quos qui!sit aliquid.!"></TimeLineCard>
                        </div>
                        <div className="col-lg-6 col-12">
                            <TimeLineCard CourseName="UI / UX Designing" Date="01-08-20023" dueDate='01-05-2024' college="Flux Accadmey" des="sit aliquid, laudantium facere officiis. Quaerat, quos qui!sit aliquid, laudantium facere officiis. Quaerat, quos qui!sit aliquid.!"></TimeLineCard>
                        </div>
                        <div className="col-lg-6 col-12">
                            <TimeLineCard CourseName="Web Seo" Date="01-01-20024" dueDate='01-05-2024' college="YouTube" des="sit aliquid, laudantium facere officiis. Quaerat, quos qui!sit aliquid, laudantium facere officiis. Quaerat, quos qui!sit aliquid.!"></TimeLineCard>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
