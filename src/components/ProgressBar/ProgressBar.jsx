import React from 'react'
import './ProgressBar.css'

const ProgressBar = ({ name, prencentage }) => {
    return (
        <>
            <div className="col-md-6 col-12 ">
                <div className="progressbar mt-4 ">
                    <div className="progresstitle">{name}</div>
                    <div className="bar">
                        <div className="bartitle">{prencentage}%</div>
                        <div className="progress">
                            <span className="html wspan" style={{ width: `${prencentage}%`, }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar
