import React, { useEffect, useState } from 'react'
import "./AllArtShow.css"
const AllArtShow = ({ designsList }) => {


    const [AAWidth, setAAWidth] = useState(window.innerWidth)


    useEffect(() => {
        if (window.innerWidth > 700) {
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
            var d2 = document.createElement("div")
            d2.id = "AAS-thirdColumn"
            d2.className = "AAS-Column"
            document.getElementsByClassName("AAS-main")[0].appendChild(d2)



            for (let i = 0; i < designsList.length; i++) {
                var el = designsList[i]
                if (x === 0) {
                    document.getElementById("AAS-firstColumn").innerHTML +=
                        `<img id='AASMedia${i}' class="AASMedia" src='https://drive.google.com/uc?id=${el}' alt="p" />`;
                    x = x + 1
                } else if (x === 1) {
                    document.getElementById("AAS-secondColumn").innerHTML +=
                        `<img id='AASMedia${i}' class="AASMedia"  src='https://drive.google.com/uc?id=${el}' alt="p" />`;
                    x = x + 1
                } else {
                    document.getElementById("AAS-thirdColumn").innerHTML +=
                        `<img id='AASMedia${i}' class="AASMedia"  src='https://drive.google.com/uc?id=${el}' alt="p" />`;
                    x = 0
                }
            }
        } else {
            // eslint-disable-next-line
            var x = 0
            document.getElementsByClassName("AAS-main")[0].innerHTML = ""
            // eslint-disable-next-line
            var d = document.createElement("div")
            d.id = "AAS-firstColumn"
            d.className = "AAS-Column"
            document.getElementsByClassName("AAS-main")[0].appendChild(d)
            // eslint-disable-next-line
            var d1 = document.createElement("div")
            d1.id = "AAS-secondColumn"
            d1.className = "AAS-Column"
            document.getElementsByClassName("AAS-main")[0].appendChild(d1)



            for (let i = 0; i < designsList.length; i++) {
                // eslint-disable-next-line
                var el = designsList[i]
                if (x === 0) {
                    document.getElementById("AAS-firstColumn").innerHTML +=
                        `<img id='AASMedia${i}' class="AASMedia" src='https://drive.google.com/uc?id=${el}' alt="p" />`;
                    x = x + 1
                } else if (x === 1) {
                    document.getElementById("AAS-secondColumn").innerHTML +=
                        `<img id='AASMedia${i}' class="AASMedia"  src='https://drive.google.com/uc?id=${el}' alt="p" />`;
                    x = 0

                }
            }
        }
        // eslint-disable-next-line
    }, [AAWidth])

    window.addEventListener("resize", () => {
        setAAWidth(window.innerWidth)

    })



    return (
        <div className='AAS-main'>



        </div>
    )
}


export default AllArtShow