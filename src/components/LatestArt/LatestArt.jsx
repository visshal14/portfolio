import React, { useState } from 'react'
import "./LatestArt.css"
import ArtSlideshow from "./ArtSlideshow"
import AllArtShow from './AllArtShow'
// import db from "../../firebase"
import artList from "./artList.json"
const LatestArt = () => {
    const [artSelection, setArtSelection] = useState(false)
    const artSelectionBtn = () => {
        (artSelection === false) ? setArtSelection(true) : setArtSelection(false)
    }
    // useEffect(() => {
    //   

    //     db.collection("designs").onSnapshot((snapshot) => {
    //         snapshot.docs.map((doc) => (
    //             // console.log(doc.data())

    //         ))
    //     })
    //     // eslint-disable-next-line
    // }, []);

    return (
        <div className='LT-main' id="art">
            <div className='LT-top'>
                <span>Latest Arts</span>
                <div onClick={artSelectionBtn} className='LT-seeAll'>
                    {(artSelection === true) ? "See Less" : "See All"}
                </div>
            </div>
            {(artSelection === false) && <ArtSlideshow designsList={artList} />}
            {(artSelection === true) && <AllArtShow designsList={artList} />}
        </div>
    )
}





export default LatestArt