import React, { useState } from 'react'
import "./LatestArt.css"
import ArtSlideshow from "./ArtSlideshow"
import AllArtShow from './AllArtShow'
const LatestArt = () => {
    const [artSelection, setArtSelection] = useState(true)
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




const designsList = [
    { URL: '1-_7BhnPjKGvftkpPvET9Wckl9CSUwlQp' },
    { URL: '115ROK_uIWqWwCGtUcS3fV5QZWNFUB-fs' },
    { URL: '11oU7SSswOF5A1td3MkDgQFY_iH28iXJ5' },
    { URL: '12fLEN3zn2GGf8y_gfNQWcokRLeQuX6RQ' },
    { URL: '15x-ORe2qZxt02mmRx1xonMqSv7QLAPWO' },
    { URL: '185lc0srSfyx9kBVfrnxgZEDB1MvLM9Bs' },
    { URL: '1-NGbKTHXvBoajuw9QmJFHDL8zwH8GkT4' },
    { URL: '18Jp4_72njv6WSy-9oYsU2Lyr7KlcwZtJ' },
    { URL: '19Rvh1MtuYqd-2UXakWyVC8GZYeEYBASy' },
    { URL: '1BqmyMnBOAMpgGIp_hNsTmokQ8F0SOAsz' },
    { URL: '1CJ3URagdo60j-Qp3zHsvEZdRHL_I-710' },
    { URL: '1ECFliLsAVqCDg9zgXcaE_Ez_rcv4ZdPd' },
    { URL: '1EIGPrxbztFr5qWaHJAyV6pyJbWYq6s2I' },
    { URL: '1EZzpr2-NjGO3L0QAfvbfF5gHlF9-yQT5' },
    { URL: '1Eb_5u9gZlugdGxGp0hJ4YhzWYvjSY1aM' },
    { URL: '1Finf_QFNGsF8URhmmF0UxRc5hvsb_jxC' },
    { URL: '1Fm7MAztVojLfYnHksehpryhPGoH64PiT' },
    { URL: '1G7Z2T1YjLTWUf8eos2QTIDf48K19XJzN' },
    { URL: '1GYlnpjp50Ek0jF-GxrfKrcC_aTdzYI_W' },
    { URL: '1Hzh_eQJ68S1dLW56MpOjXmrxAYgEsbKD' },
    { URL: '1JMAZvg0hBD050BHiNvKRbq3IOYpn0WnH' },
    { URL: '1JzBrM4jXpAEpZNi9YWPT_2Dksza-CuV5' },
    { URL: '1MJiq_vnyhweKtSBNRyqEGy6jh6DEdMOu' },
    { URL: '1OZfUqA8yGyQn-IWTq_x4AOrxsjG-xub7' },
    { URL: '1V82RWt-wRH1xm33S2MKmuiuhydEcbASx' },
    { URL: '1VVN2gNAXDkfjRPbLg0QiTGpLLXebVM8O' },
    { URL: '1WAzS4NKCHmYK3cVk6T6LnjK90vj0RBpV' },
    { URL: '1WmALpIh5k3bPiBLgc6-VsT9q6a4JUgWb' },
    { URL: '1YNR-Hq6ksVKfVtCT1FfD7IBg4UKZ13D7' },
    { URL: '1YkaxsTp4Kojojs2UzLa6fcTqfQn1OaMy' },
    { URL: '1_O0tr787yddfNzY87jcN01OzBGV940NE' },
    { URL: '1aXrriiHwGEs7ey2DuLZPqOcCHUt5rgKl' },
    { URL: '1bfGwItLuikCLif6P9v1bf-Vpw-PehJRX' },
    { URL: '1e-GjG00LOWkuBpSH-AMpKo_IjcnlyDTh' },
    { URL: '1fXzM3jqzc0gHNtqB24AyYoAfQH-G7pSr' },
    { URL: '1g4QSFzuhqwHL0niVxVW1mJg--dc7ziWL' },
    { URL: '1j4AXlI1JlNVmKvgyCf_J7nAIUo4Mejju' },
    { URL: '1k0t5ldsazsqzSKIEKN2QfnobLZPNqpyI' },
    { URL: '1lOXqsR4mWJNdmYHu9TgFDksijUjgdPfa' },
    { URL: '1nD_zFnfHtQnnbUFTyeE7LhdRat_OUQJB' },
    { URL: '1njh6hTqYlClXRRLSW1ZDjbwenLRhGypE' },
    { URL: '1oLgO4E0pUtxKKYh_Y-O9Jn8cjtlTbGSa' },
    { URL: '1pF7LAkJjd7g0y5nysjKY-NN-Y2yurBrN' },
    { URL: '1r2BQHeZnzQgeZNfEiupAEOs_0i1PF_v0' },
    { URL: '1rbvpzn87HthQwQvHCwHlbsXPHYe1XGQm' },
    { URL: '1vXJA1b79XYl7tGbDFi10XRDn3kPUnaAu' },
    { URL: '1vrOzhjhfQymQyzz0qofiyxi2UBIy8UN5' },
    { URL: '1xKX2OFntGdLt4L_Hz0yiXU8QtoLP9VCk' },
    { URL: '1ybjgIlS3dnMmIj0DZyg2XCazJ_Jj4zLe' },
    { URL: '1zA1OT6jcx_4_InJdoLfL4eaU5lS-q3fn' }
]
export default LatestArt