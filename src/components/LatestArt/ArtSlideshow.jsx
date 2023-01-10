import React, { useEffect, useState } from 'react'
import "./ArtSlideshow.css"
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';

const ArtSlideshow = ({ designsList }) => {
    // console.log(designsList)
    const [slideCount, setSlideCount] = useState({
        first: 0,
        second: 1,
        third: 2
    })
    const showPlus = (value) => {
        setSlideCount({
            first: slideCount.first + value,
            second: slideCount.second + value,
            third: slideCount.third + value,
        })
    }
    useEffect(() => {
        if (slideCount.first < 0) {
            setSlideCount({
                ...slideCount,
                first: document.getElementsByClassName("ASMedia").length - 1,
            })
        } else if (slideCount.second < 0) {
            setSlideCount({
                ...slideCount,
                second: document.getElementsByClassName("ASMedia").length - 1,
            })
        } else if (slideCount.third < 0) {
            setSlideCount({
                ...slideCount,
                third: document.getElementsByClassName("ASMedia").length - 1,
            })
        }

        else if (slideCount.third >= document.getElementsByClassName("ASMedia").length) {
            setSlideCount({
                ...slideCount,
                third: 0,
            })
        } else if (slideCount.second >= document.getElementsByClassName("ASMedia").length) {
            setSlideCount({
                ...slideCount,
                second: 0,
            })
        } else if (slideCount.first >= document.getElementsByClassName("ASMedia").length) {
            setSlideCount({
                ...slideCount,
                first: 0,
            })
        }



        if (window.innerWidth < 751 && window.innerWidth > 570) {
            imgSShow(2)
        } else if (window.innerWidth < 570) {
            imgSShow()
        } else {
            imgSShow(3)
        }


        setTimeout(() => {
            let x = document.getElementsByClassName("ASMedia")
            for (let i = 0; i < x.length; i++) {
                var oriWidth = x[i].naturalWidth
                var oriHeight = x[i].naturalHeight
                var renWidth = x[i].clientWidth
                var renHeight = x[i].clientHeight
                if (oriWidth / oriHeight !== renWidth / renHeight) {
                    x[i].style.objectFit = "cover"
                }
            }
        }, 1000)
        // eslint-disable-next-line
    }, [slideCount])

    window.addEventListener("resize", () => {
        if (window.innerWidth < 751 && window.innerWidth > 570) {
            imgSShow(2)
        } else if (window.innerWidth < 570) {
            imgSShow()
        } else {
            imgSShow(3)
        }
    })


    const imgSShow = (id) => {
        for (let i = 0; i < document.getElementsByClassName("ASMedia").length; i++) {
            if (id === 3) {
                if (i === slideCount.first || i === slideCount.second || i === slideCount.third) {
                    document.getElementById("ASMedia" + i).style.display = "block"
                } else {
                    document.getElementById("ASMedia" + i).style.display = "none"
                }
            }
            else if (id === 2) {
                if (i === slideCount.first || i === slideCount.second) {
                    document.getElementById("ASMedia" + i).style.display = "block"
                } else {
                    document.getElementById("ASMedia" + i).style.display = "none"
                }
            } else {
                if (i === slideCount.first) {
                    document.getElementById("ASMedia" + i).style.display = "block"
                } else {
                    document.getElementById("ASMedia" + i).style.display = "none"
                }
            }

        }


    }




    const imgHover = (id) => {
        if (id === "over") {
            for (let i = 0; i < document.getElementsByClassName("ASMedia").length; i++) {
                document.getElementsByClassName("ASMedia")[i].style.filter = "blur(0px)"
            }
            return
        }
        for (let i = 0; i < document.getElementsByClassName("ASMedia").length; i++) {
            if (id !== i) {
                document.getElementsByClassName("ASMedia")[i].style.filter = "blur(4px)"
            }
            document.getElementsByClassName("ASMedia")[id].style.filter = "blur(0px)"
        }
    }



    return (
        <div className='AS-main'>
            <span onClick={() => showPlus(-1)}><ArrowBackIosRounded /></span>
            <div className='AS-photo-div'>
                {designsList.map((el, i) => (
                    <img onMouseMove={() => { imgHover(i) }} onMouseOut={() => { imgHover("over") }} id={"ASMedia" + i} className="ASMedia" key={i} src={`https://drive.google.com/uc?id=${el.URL}`} alt="p" />
                ))}
            </div>
            <span onClick={() => showPlus(1)}><ArrowForwardIosRounded /></span>
        </div>
    )
}

export default ArtSlideshow