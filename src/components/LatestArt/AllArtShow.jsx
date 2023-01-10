import React, { useEffect, useState, useRef } from 'react'
import "./AllArtShow.css"

const AllArtShow = ({ designsList }) => {

    const [AAWidth, setAAWidth] = useState(window.innerWidth)
    const tempWidth = useRef(window.innerWidth)


    window.addEventListener("resize", () => {
        changeTitles()
    })
    const changeTitles = () => {
        if (tempWidth.current > 700) {
            if (window.innerWidth < 700) {
                setAAWidth(window.innerWidth)
            }
        }
        if (tempWidth.current < 700) {
            if (window.innerWidth > 700) {
                setAAWidth(window.innerWidth)
            }
        }
        return 0;
    }
    useEffect(() => {
        tempWidth.current = AAWidth
        window.innerWidth > 700 ? imgPosition(3) : imgPosition(2)
        // eslint-disable-next-line
    }, [AAWidth])

    const imgPosition = (columns) => {
        document.getElementsByClassName("AAS-main")[0].innerHTML = ""
        var x = 0
        var d = document.createElement("div")
        d.id = "AAS-firstColumn"
        d.className = "AAS-Column"
        document.getElementsByClassName("AAS-main")[0].appendChild(d)
        var d1 = document.createElement("div")
        d1.id = "AAS-secondColumn"
        d1.className = "AAS-Column"
        document.getElementsByClassName("AAS-main")[0].appendChild(d1)
        if (columns === 3) {
            var d2 = document.createElement("div")
            d2.id = "AAS-thirdColumn"
            d2.className = "AAS-Column"
            document.getElementsByClassName("AAS-main")[0].appendChild(d2)
        }

        for (let i = 0; i < designsList.length; i++) {
            var el = designsList[i]
            if (x === 0) {
                document.getElementById("AAS-firstColumn").innerHTML +=
                    `<img id='AASMedia${i}' class="AASMedia" src='https://drive.google.com/uc?id=${el.URL}' alt="p" />`;
                x = x + 1
            } else if (x === 1) {
                document.getElementById("AAS-secondColumn").innerHTML +=
                    `<img id='AASMedia${i}' class="AASMedia"  src='https://drive.google.com/uc?id=${el.URL}' alt="p" />`;
                columns === 3 ? x++ : x = 0;
            }
            else if (columns === 3 || x === 2) {
                document.getElementById("AAS-thirdColumn").innerHTML +=
                    `<img id='AASMedia${i}' class="AASMedia"  src='https://drive.google.com/uc?id=${el.URL}' alt="p" />`;
                x = 0
            }
        }
    }



    return (
        <div className='AAS-main'>
        </div>
    )
}


export default AllArtShow