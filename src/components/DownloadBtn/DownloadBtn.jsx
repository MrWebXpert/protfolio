import React from 'react'
import downloadimg from '../../assets/img/svg/downloadbtn.svg'
import './DownloadBtn.css'


const DownloadBtn = () => {
    return (
        <>
            <div className="cvbtn d-flex align-items-center justify-content-center d-md-flex align-items-md-start justify-content-md-start">
                <a href="../assets/img/blog/blog(1).jpg" className="mainbtn " download>
                    <span className="btnText">Download Cv</span>
                    <span className="btnicon"><img src={downloadimg} alt="" /></span>
                </a>
            </div></>
    )
}

export default DownloadBtn
