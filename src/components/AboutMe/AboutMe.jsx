import React from 'react'
import "./AboutMe.css"
import { ArrowForwardRounded } from '@mui/icons-material';
const AboutMe = () => {
    return (
        <div className='AM-main' id="about">
            <div className='AM-leftContent-div'>
                <div className='AM-content-tiles'>
                    <div className='AM-content-heading'>About Me</div>
                    <div>I am a software developer with
                        robust problem-solving skills
                        and have passion for creating
                        and designing software in a
                        test- driven environment.</div>
                </div>
                <div className='AM-content-tiles'>
                    <div className='AM-content-heading'>Skills</div>
                    <div>
                        <p>Coding Languages</p>
                        HTML, javaScript, c++, swift
                        <p>Frameworks/Systems</p>
                        MERN Stack,Bootstrap, jQuery
                    </div>

                </div>
            </div>
            <div className='AM-rightContent-div'>
                <div className='AM-devGraphic-div'>
                    <div className='AM-devGraphic-top-div'>01<div></div><a href="/"><ArrowForwardRounded /></a></div>
                    <div>Development</div>
                    <div>

                        <div className='AM-devGraphic-type-div'><div className='AM-devGraphic-smallBullet'></div> Web Development</div>
                        <div className='AM-devGraphic-type-div'><div className='AM-devGraphic-smallBullet'></div> iOS Development</div>
                    </div>
                </div>
                <div className='AM-devGraphic-div'>
                    <div className='AM-devGraphic-top-div'>02<div></div><a href="/"><ArrowForwardRounded /></a></div>
                    <div>Graphic Design</div>
                    <div>
                        <div className='AM-devGraphic-type-div'><div className='AM-devGraphic-smallBullet'></div> Adobe XD</div>
                        <div className='AM-devGraphic-type-div'><div className='AM-devGraphic-smallBullet'></div> Adobe Illustrator</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe