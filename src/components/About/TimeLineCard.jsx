import React from 'react'
import Berifcaseimg from '../../assets/img/svg/berifcase.svg'
import './TimeLineCard.css'

const TimeLineCard = ({ Date, CourseName, college, des, dueDate }) => {
    return (
        <>
            <div className="timecard">
                {/* <div className="timeIcon">
                    <img src={Berifcaseimg} alt="" />
                </div> */}
                <div className="timedes">
                    <div className="timetitle">
                        <span>{Date}</span> to  <span>{dueDate}</span>
                    </div>
                    <h3>{CourseName} <span>---{college}</span></h3>
                    <p>{des}</p>
                </div>
            </div>
        </>
    )
}

export default TimeLineCard
