import React from 'react'
import "./ProjectThumbnail.css"


const ProjectThumbnail = ({ data, i, onclick }) => {

    return (
        <div onClick={() => onclick(data)} className='PT-main'>
            <img src={`https://drive.google.com/uc?id=${data?.thumbnail}`} alt="p" />
            <div className='PT-serialNoDiv'>
                {(i < 9) ? `0${i + 1}` : i + 1}
            </div>
            <div className='PT-name'>
                {data.name}
            </div>
        </div>
    )
}

export default ProjectThumbnail