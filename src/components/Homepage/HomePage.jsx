import React from 'react'
import "./HomePage.css"
import { photo } from '../../Assets'
const HomePage = () => {
    return (
        <div className='homeDiv' id="home">
            <div className='homeLeftPartition'>
                <div className='homeNameNDes'>
                    <div className='homeName'>
                        My Name is <span>Vishal</span>
                    </div>
                    <div className='homeDes'>
                        I am developer and designer
                        with more than 2 years of
                        experience
                    </div>
                </div>
                <div className='homeLangBtn'>
                    <button>c++</button>
                    <button>swift</button><br />
                    <button>javaScript</button>
                    <button className='xdBtn'>Adobe XD</button>
                </div>
            </div>
            <div className='homeRightPartition'>
                <RightPartPhoto />
                {/* <img style={rightImg} src={frontImg} alt="rightphoto" /> */}
            </div>

        </div>
    )
}

const RightPartPhoto = () => {
    return (
        <div className='homeP'>
            <div className='homePhotoBase'>
                <div className='homePhotoBrownP'>
                </div>
                <img src={photo} alt="p" />
                <div className='expDiv'>
                    <span>2+</span><br />
                    Years Experience
                </div>
            </div>
        </div>

    )
}


export default HomePage