import React, { useState } from 'react'
import "./LatestArt.css"
import ArtSlideshow from "./ArtSlideshow"
import AllArtShow from './AllArtShow'
const LatestArt = () => {
    // var result = subject.replace(/https:\/\/drive\.google\.com\/file\/d\/(.*?)\/.*?\?usp=sharing/g, "https://drive.google.com/uc?export=download&id=$1");
    const [artSelection, setArtSelection] = useState(false)

    const artSelectionBtn = () => {
        (artSelection === false) ? setArtSelection(true) : setArtSelection(false)
    }


    return (
        <div className='LT-main' id="art">
            <div className='LT-top'>
                <span>Latest Arts</span>
                <div onClick={artSelectionBtn} className='LT-seeAll'>
                    {(artSelection === true) ? "See Less" : "See All"}
                </div>
            </div>
            {(artSelection === false) && <ArtSlideshow designsList={designsList} />}
            {(artSelection === true) && <AllArtShow designsList={designsList} />}
        </div>
    )
}

// const ArtSlideshow = () => {

//     const [slideCount, setSlideCount] = useState({
//         first: 0,
//         second: 1,
//         third: 2

//     })

//     const showPlus = (value) => {
//         setSlideCount({
//             first: slideCount.first + value,
//             second: slideCount.second + value,
//             third: slideCount.third + value,
//         })

//     }
//     useEffect(() => {
//         // document.getElementsByClassName("ASMedia").length
//         if (slideCount.first < 0) {
//             setSlideCount({
//                 ...slideCount,
//                 first: document.getElementsByClassName("ASMedia").length - 1,
//             })
//         } else if (slideCount.second < 0) {
//             setSlideCount({
//                 ...slideCount,
//                 second: document.getElementsByClassName("ASMedia").length - 1,
//             })
//         } else if (slideCount.third < 0) {
//             setSlideCount({
//                 ...slideCount,
//                 third: document.getElementsByClassName("ASMedia").length - 1,
//             })
//         }



//         else if (slideCount.third >= document.getElementsByClassName("ASMedia").length) {
//             setSlideCount({
//                 ...slideCount,
//                 third: 0,
//             })
//         } else if (slideCount.second >= document.getElementsByClassName("ASMedia").length) {
//             setSlideCount({
//                 ...slideCount,
//                 second: 0,
//             })
//         } else if (slideCount.first >= document.getElementsByClassName("ASMedia").length) {
//             setSlideCount({
//                 ...slideCount,
//                 first: 0,
//             })
//         }


//         for (let i = 0; i < document.getElementsByClassName("ASMedia").length; i++) {
//             if (i === slideCount.first || i === slideCount.second || i === slideCount.third) {
//                 document.getElementById("ASMedia" + i).style.display = "block"
//             } else {
//                 document.getElementById("ASMedia" + i).style.display = "none"
//             }
//         }




//         setTimeout(() => {
//             let x = document.getElementsByClassName("ASMedia")
//             for (let i = 0; i < x.length; i++) {
//                 var oriWidth = x[i].naturalWidth
//                 var oriHeight = x[i].naturalHeight
//                 var renWidth = x[i].clientWidth
//                 var renHeight = x[i].clientHeight
//                 if (oriWidth / oriHeight !== renWidth / renWidth) {
//                     x[i].style.objectFit = "cover"
//                 }
//             }
//         }, 1000)
//     }, [slideCount])

//     return (
//         <div className='AS-main'>
//             <span onClick={() => showPlus(-1)}><ArrowBackIosRounded /></span>
//             <div className='AS-photo-div'>
//                 {designsList.map((el, i) => (
//                     <img id={"ASMedia" + i} className="ASMedia" key={i} src={`https://drive.google.com/uc?id=${el}`} alt="p" />
//                 ))}
//             </div>
//             <span onClick={() => showPlus(1)}><ArrowForwardIosRounded /></span>
//         </div>
//     )
// }





const designsList = [
    '1-_7BhnPjKGvftkpPvET9Wckl9CSUwlQp',
    '115ROK_uIWqWwCGtUcS3fV5QZWNFUB-fs',
    '11oU7SSswOF5A1td3MkDgQFY_iH28iXJ5',
    '12fLEN3zn2GGf8y_gfNQWcokRLeQuX6RQ',
    '15x-ORe2qZxt02mmRx1xonMqSv7QLAPWO',
    '185lc0srSfyx9kBVfrnxgZEDB1MvLM9Bs',
    '1-NGbKTHXvBoajuw9QmJFHDL8zwH8GkT4',
    '18Jp4_72njv6WSy-9oYsU2Lyr7KlcwZtJ',
    '19Rvh1MtuYqd-2UXakWyVC8GZYeEYBASy',
    '1BqmyMnBOAMpgGIp_hNsTmokQ8F0SOAsz',
    '1CJ3URagdo60j-Qp3zHsvEZdRHL_I-710',
    '1ECFliLsAVqCDg9zgXcaE_Ez_rcv4ZdPd',
    '1EIGPrxbztFr5qWaHJAyV6pyJbWYq6s2I',
    '1EZzpr2-NjGO3L0QAfvbfF5gHlF9-yQT5',
    '1Eb_5u9gZlugdGxGp0hJ4YhzWYvjSY1aM',
    '1Finf_QFNGsF8URhmmF0UxRc5hvsb_jxC',
    '1Fm7MAztVojLfYnHksehpryhPGoH64PiT',
    '1G7Z2T1YjLTWUf8eos2QTIDf48K19XJzN',
    '1GYlnpjp50Ek0jF-GxrfKrcC_aTdzYI_W',
    '1Hzh_eQJ68S1dLW56MpOjXmrxAYgEsbKD',
    '1JMAZvg0hBD050BHiNvKRbq3IOYpn0WnH',
    '1JzBrM4jXpAEpZNi9YWPT_2Dksza-CuV5',
    '1MJiq_vnyhweKtSBNRyqEGy6jh6DEdMOu',
    '1OZfUqA8yGyQn-IWTq_x4AOrxsjG-xub7',
    '1V82RWt-wRH1xm33S2MKmuiuhydEcbASx',
    '1VVN2gNAXDkfjRPbLg0QiTGpLLXebVM8O',
    '1WAzS4NKCHmYK3cVk6T6LnjK90vj0RBpV',
    '1WmALpIh5k3bPiBLgc6-VsT9q6a4JUgWb',
    '1YNR-Hq6ksVKfVtCT1FfD7IBg4UKZ13D7',
    '1YkaxsTp4Kojojs2UzLa6fcTqfQn1OaMy',
    '1_O0tr787yddfNzY87jcN01OzBGV940NE',
    '1aXrriiHwGEs7ey2DuLZPqOcCHUt5rgKl',
    '1bfGwItLuikCLif6P9v1bf-Vpw-PehJRX',
    '1e-GjG00LOWkuBpSH-AMpKo_IjcnlyDTh',
    '1fXzM3jqzc0gHNtqB24AyYoAfQH-G7pSr',
    '1g4QSFzuhqwHL0niVxVW1mJg--dc7ziWL',
    '1j4AXlI1JlNVmKvgyCf_J7nAIUo4Mejju',
    '1k0t5ldsazsqzSKIEKN2QfnobLZPNqpyI',
    '1lOXqsR4mWJNdmYHu9TgFDksijUjgdPfa',
    '1nD_zFnfHtQnnbUFTyeE7LhdRat_OUQJB',
    '1njh6hTqYlClXRRLSW1ZDjbwenLRhGypE',
    '1oLgO4E0pUtxKKYh_Y-O9Jn8cjtlTbGSa',
    '1pF7LAkJjd7g0y5nysjKY-NN-Y2yurBrN',
    '1r2BQHeZnzQgeZNfEiupAEOs_0i1PF_v0',
    '1rbvpzn87HthQwQvHCwHlbsXPHYe1XGQm',
    '1vXJA1b79XYl7tGbDFi10XRDn3kPUnaAu',
    '1vrOzhjhfQymQyzz0qofiyxi2UBIy8UN5',
    '1xKX2OFntGdLt4L_Hz0yiXU8QtoLP9VCk',
    '1ybjgIlS3dnMmIj0DZyg2XCazJ_Jj4zLe',
    '1zA1OT6jcx_4_InJdoLfL4eaU5lS-q3fn']


export default LatestArt