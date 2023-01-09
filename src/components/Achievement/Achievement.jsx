import React from 'react'
import "./Achievement.css"

import { achieveSvg } from '../../Assets'
const Achievement = () => {
    return (
        <div className='achieve-main'>
            <img src={achieveSvg} alt="p" />
            <div className='achieve-top-div'>
                Achievement
            </div>
            <div className='achieve-content-div'>
                <p>Participated in Hackathon with WITECH INDIA(NGO)</p>
                {/* <div>It was a three Day Virtual hackathon
                Mentor for VR: Miss Mina Hyeon (Korea)
                Mentor for AI: Mr. Andres Bresser (Germany)</div> */}

                <p>Internship with Delhi Gov. under (Samagra Sikhsa)
                    as an Instructor on Digital Ethics and cyber Security</p>

                <p>Participated in Accelerator UNICEPT</p>

                <div><li>Took Problem statement from Prepbyte as part of team Xbotics7</li>
                    <li> Problem: Make a educational online platform for masses</li>
                    <li>My contribution are both frontend as well as backend</li>
                    <li>Result: Delivered a Windows application in Beta with working backend
                        and broken Neural Network</li></div>
            </div>

        </div>
    )
}

export default Achievement