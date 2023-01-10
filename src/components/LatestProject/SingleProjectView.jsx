import React, { useEffect, useState } from 'react'
import "./SingleProjectView.css"
import { ArrowBackIosRounded, GitHub, ArrowForwardIosRounded } from '@mui/icons-material';

const SingleProjectView = ({ data, hideFun }) => {
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    const [showCount, setShowCount] = useState(0)
    const showPlus = (value) => {
        setShowCount(showCount + value)
    }
    useEffect(() => {
        var mediaCount = document.getElementsByClassName("SPMedia").length
        if (mediaCount) {
            if (showCount < 0) {
                setShowCount(mediaCount - 1)
            } else if (showCount >= mediaCount) {
                setShowCount(0)
            }
            for (let i = 0; i < mediaCount; i++) {
                if (i === showCount) {
                    if (document.getElementById("media" + i)) {
                        document.getElementById("media" + i).style.display = "block"
                    }
                    // document.getElementById("media" + i).style.display = "block"
                } else {
                    if (document.getElementById("media" + i)) {
                        document.getElementById("media" + i).style.display = "none"
                    }
                    //  document.getElementById("media" + i).style.display = "none"
                }
            }
        }

        // eslint-disable-next-line
    }, [showCount])



    return (
        <div className='SProject-div'>
            <div onClick={hideFun} className='SProject-backBtn-div'>
                <ArrowBackIosRounded />Back
            </div>
            <div className='SProject-photo-Name-div'>
                <div className='SProject-photo-div'>
                    <span onClick={() => showPlus(-1)}><ArrowBackIosRounded /></span>
                    {data?.photos?.map((el, i) =>
                        <img id={"media" + i} className="SPMedia" key={i} src={`https://drive.google.com/uc?id=${el}`} alt="p" />
                    )}
                    {(data?.videos === "") ? "" : data.videos?.map((el, i) => (
                        <iframe className="SPMedia" key={i} id={"media" + (i + data.photos.length)} src={"https://www.youtube.com/embed/" + el} width="560" height="315" title="YouTube video player" autoPlay allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    ))}
                    <span onClick={() => showPlus(1)}><ArrowForwardIosRounded /></span>
                </div>
                <div className='SProject-content-div'>
                    <div>{data.name}</div>
                    <a href={data.deployLink}>{data.deployLink}</a>
                    <div>{
                        truncate(data.description, 150)}</div>
                    <div>FrameWork Used:
                        {data.type.map((el, i) => (
                            (i === 1) ? (el === "All Projects") ? "" : el : (el === "All Projects") ? "" : "," + el
                        ))}
                    </div>
                    {(data.githubLink === "") ? "" : <button onClick={() => { window.open(data.githubLink, '_blank') }} ><GitHub /> Source Code</button>}
                </div>
            </div>


        </div>

    )
}


export default SingleProjectView