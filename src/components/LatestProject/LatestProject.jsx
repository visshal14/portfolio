import React, { useEffect, useState } from 'react'
import "./LatestProject.css"
import ProjectThumbnail from './ProjectThumbnail';
import { Menu, ExpandMoreRounded, ExpandLessRounded } from '@mui/icons-material';
import SingleProjectView from './SingleProjectView';


const LatestProject = () => {
    const [projectSelection, setProjectSelection] = useState("All Projects")
    const [projectSelectionDis, setProjectSelectionDis] = useState("none")
    const projectSelectionBtn = (type) => {
        if (type === "all") setProjectSelection("All Projects")
        else if (type === "nodejs") setProjectSelection("Node Js")
        else if (type === "reactjs") setProjectSelection("React Js")
        else if (type === "ios") setProjectSelection("iOS")
        else if (type === "python") setProjectSelection("Python")
        setProjectSelectionDis("none")
        setExpandText("See More")
    }
    const [expandText, setExpandText] = useState("See More")
    const projectSelectionMenuBtn = () => {
        if (projectSelectionDis === "none") return setProjectSelectionDis("block")
        setProjectSelectionDis("none")

    }

    const expandMoreBtn = () => {
        if (expandText === "See More") return setExpandText("See Less")
        setExpandText("See More")
    }
    // eslint-disable-next-line
    const [totalPTMain, setTotalPTMain] = useState(0)
    useEffect(() => {
        let x = document.getElementsByClassName("PT-serialNoDiv")
        setTotalPTMain(x.length)
        for (let i = 0; i < x.length; i++) {
            if (i < 9) x[i].innerHTML = "0" + (i + 1)
            else x[i].innerHTML = i + 1
        }
    }, [projectSelection, expandText])

    const [projectDivDis, setProjectDivDis] = useState(false)
    const [projectData, setProjectData] = useState("")
    const thumbnailClicked = (value) => {
        setProjectData(value)
        setProjectDivDis(true)
    }
    const SPDivHide = () => {
        setProjectDivDis(false)
    }

    return (
        <div id="project" className='project-main'>
            <div className='project-top-div'>
                <span>Latest Projects</span>
                <div className='project-selectionDiv'>
                    {projectSelection}<Menu onClick={projectSelectionMenuBtn} className='projectMenuIcon' />
                    <div style={{ display: projectSelectionDis }} className='project-selection'>
                        <button onClick={() => (projectSelectionBtn("all"))}>All Projects</button>
                        <button onClick={() => (projectSelectionBtn("nodejs"))}>Node Js</button>
                        <button onClick={() => (projectSelectionBtn("reactjs"))}>React Js</button>
                        <button onClick={() => (projectSelectionBtn("ios"))}>iOS</button>
                        <button onClick={() => (projectSelectionBtn("python"))}>Python</button>
                    </div>
                </div>
            </div>
            <div className='project-middle-div'>
                {/* {projectsList.map((value, key) =>
                    // PLMap(value, key, expandText, projectSelection)
                    (value.type.includes(projectSelection)) ? (expandText === "See More") ? (key < 2) && (<ProjectThumbnail data={value} i={key} key={key} />) : <ProjectThumbnail data={value} i={key} key={key} /> : ""
                )} */}
                {projectsList.filter((value, i) => {
                    return value.type.includes(projectSelection)
                }).map((value, key) =>
                    (expandText === "See More") ? (key < 3) && (<ProjectThumbnail data={value} i={key} key={key} onclick={thumbnailClicked} />) : <ProjectThumbnail data={value} i={key} key={key} onclick={thumbnailClicked} />
                    // PLMap(value, key, expandText, projectSelection)
                    // (value.type.includes(projectSelection)) ? (expandText === "See More") ? (key < 2) && (<ProjectThumbnail data={value} i={key} key={key} />) : <ProjectThumbnail data={value} i={key} key={key} /> : ""
                )}
                {projectDivDis && <SingleProjectView data={projectData} hideFun={SPDivHide} />}
                {/* <div className='SProject-div'>
                    <div onClick={SPDivHide} className='SProject-backBtn-div'>
                        <ArrowBackIos />Back
                    </div>
                    <div className='SProject-photo-Name-div'>
                        <div className='SProject-photo-div'>

                        </div>
                        <div className='SProject-content-div'>

                        </div>
                    </div>


                </div> */}


            </div>
            <div onClick={expandMoreBtn} className='project-last-div'>
                {expandText}{(expandText === "See More") ? <ExpandMoreRounded /> : <ExpandLessRounded />}
            </div>
        </div>
    )
}

const projectsList = [
    // {
    //     "name": "eququiz",
    //     "description": "it is a education platform",
    //     "deployLink": "https://eduquiz01.netlify.app",
    //     "githubLink": "",
    //     "type": ["nodejs", "reactjs"],
    //     "thumbnail": "",
    //     "photos": [""],
    //     "videos": [""],
    // },
    {
        "name": "spotify clone",
        "description": "it is a  spotify clone",
        "deployLink": "https://spotify-clone-ff5bf.web.app",
        "githubLink": "https://spotify-clone-ff5bf.web.app",
        "type": ["All Projects", "React Js"],
        "thumbnail": "16GIu9uoN5OxZ5LLLtX2x4QIHFto2CXO4",
        "photos": ["16GIu9uoN5OxZ5LLLtX2x4QIHFto2CXO4", "1BVccqmPHAW6tCe7RRDHaNIE1VBasuHDB", "1WFCITEjNG_E3VYGwMFvkTOkFju4Fv6i5", "1CLOFK0jEidQDg5I_4fg40c1v81kJ_YVd", "1_-7WvxiUevzDR5Dg6WSuCug-y37JS54y", "1w39EC2pBWHOjFfZOCr1xy_tn7fyM4esX"],
        "videos": ["JdM7yKcSxAA"],
    },
    {
        "name": "slack clone",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        "deployLink": "https://slack-clone-99340.web.app",
        "githubLink": "https://slack-clone-99340.web.app",
        "type": ["All Projects", "React Js"],
        "thumbnail": "1SytExe0mPG_dZ_9dyt1NgtpHwKor2v0V",
        "photos": ["1SytExe0mPG_dZ_9dyt1NgtpHwKor2v0V", "1GDQb10flCq05QW_JXGUYqjoT40EmRrZ3", "1qaTHmih1JQgVRX5_0BG6wdT0xsoyD9TX", "1TUJF9ddjnvfWOAsKmIzOzpHYPsMMarK6", "1VQYgmyq4HnoRn7OPbWRm3Jw1JV9BoSoX", "1CtB5nCi51LsfdZjXB_GLpXufCJH5GUC9", "1UV3ByuiN5-LH44sHLiBQyQiECmIyvGyg"],
        "videos": ["dF7cDxnbCe0"],
    },
    {
        "name": "netflix clone",
        "description": "it is a  netflix clone",
        "deployLink": "https://netflix-clone-50751.web.app/",
        "githubLink": "https://netflix-clone-50751.web.app/",
        "type": ["All Projects", "React Js"],
        "thumbnail": "1FVJu4f8QKly2_MR1A522jKEfU2wb736_",
        "photos": ["1FVJu4f8QKly2_MR1A522jKEfU2wb736_", "1Z3pOrGv1GNMyvKUQCmgKPrwk4eSmnDRO", "1xpRUS6GzWCTOeyeHlDx6RM8smv-wiFb-", "1iqLfx9jjid42evK3Yl4-R98ggH_SilDC"],
        "videos": ["sAF-uoA6sy0"],
    },
    {
        "name": "spotify clone",
        "description": "it is a  spotify clone",
        "deployLink": "https://spotify-clone-ff5bf.web.app",
        "githubLink": "https://spotify-clone-ff5bf.web.app",
        "type": ["All Projects", "React Js"],
        "thumbnail": "16GIu9uoN5OxZ5LLLtX2x4QIHFto2CXO4",
        "photos": ["16GIu9uoN5OxZ5LLLtX2x4QIHFto2CXO4", "1BVccqmPHAW6tCe7RRDHaNIE1VBasuHDB", "1WFCITEjNG_E3VYGwMFvkTOkFju4Fv6i5", "1CLOFK0jEidQDg5I_4fg40c1v81kJ_YVd", "1_-7WvxiUevzDR5Dg6WSuCug-y37JS54y", "1w39EC2pBWHOjFfZOCr1xy_tn7fyM4esX"],
        "videos": ["JdM7yKcSxAA"],
    },
    {
        "name": "slack clone",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        "deployLink": "https://slack-clone-99340.web.app",
        "githubLink": "https://slack-clone-99340.web.app",
        "type": ["All Projects", "React Js"],
        "thumbnail": "1SytExe0mPG_dZ_9dyt1NgtpHwKor2v0V",
        "photos": ["1SytExe0mPG_dZ_9dyt1NgtpHwKor2v0V", "1GDQb10flCq05QW_JXGUYqjoT40EmRrZ3", "1qaTHmih1JQgVRX5_0BG6wdT0xsoyD9TX", "1TUJF9ddjnvfWOAsKmIzOzpHYPsMMarK6", "1VQYgmyq4HnoRn7OPbWRm3Jw1JV9BoSoX", "1CtB5nCi51LsfdZjXB_GLpXufCJH5GUC9", "1UV3ByuiN5-LH44sHLiBQyQiECmIyvGyg"],
        "videos": ["dF7cDxnbCe0"],
    },
    {
        "name": "netflix clone",
        "description": "it is a  netflix clone",
        "deployLink": "https://netflix-clone-50751.web.app/",
        "githubLink": "https://netflix-clone-50751.web.app/",
        "type": ["All Projects", "React Js"],
        "thumbnail": "1FVJu4f8QKly2_MR1A522jKEfU2wb736_",
        "photos": ["1FVJu4f8QKly2_MR1A522jKEfU2wb736_", "1Z3pOrGv1GNMyvKUQCmgKPrwk4eSmnDRO", "1xpRUS6GzWCTOeyeHlDx6RM8smv-wiFb-", "1iqLfx9jjid42evK3Yl4-R98ggH_SilDC"],
        "videos": ["sAF-uoA6sy0"],
    }, {
        "name": "spotify clone",
        "description": "it is a  spotify clone",
        "deployLink": "https://spotify-clone-ff5bf.web.app",
        "githubLink": "https://spotify-clone-ff5bf.web.app",
        "type": ["All Projects", "React Js"],
        "thumbnail": "16GIu9uoN5OxZ5LLLtX2x4QIHFto2CXO4",
        "photos": ["16GIu9uoN5OxZ5LLLtX2x4QIHFto2CXO4", "1BVccqmPHAW6tCe7RRDHaNIE1VBasuHDB", "1WFCITEjNG_E3VYGwMFvkTOkFju4Fv6i5", "1CLOFK0jEidQDg5I_4fg40c1v81kJ_YVd", "1_-7WvxiUevzDR5Dg6WSuCug-y37JS54y", "1w39EC2pBWHOjFfZOCr1xy_tn7fyM4esX"],
        "videos": ["JdM7yKcSxAA"],
    },
    {
        "name": "slack clone",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        "deployLink": "https://slack-clone-99340.web.app",
        "githubLink": "https://slack-clone-99340.web.app",
        "type": ["All Projects", "React Js"],
        "thumbnail": "1SytExe0mPG_dZ_9dyt1NgtpHwKor2v0V",
        "photos": ["1SytExe0mPG_dZ_9dyt1NgtpHwKor2v0V", "1GDQb10flCq05QW_JXGUYqjoT40EmRrZ3", "1qaTHmih1JQgVRX5_0BG6wdT0xsoyD9TX", "1TUJF9ddjnvfWOAsKmIzOzpHYPsMMarK6", "1VQYgmyq4HnoRn7OPbWRm3Jw1JV9BoSoX", "1CtB5nCi51LsfdZjXB_GLpXufCJH5GUC9", "1UV3ByuiN5-LH44sHLiBQyQiECmIyvGyg"],
        "videos": ["dF7cDxnbCe0"],
    },
    {
        "name": "netflix clone",
        "description": "it is a  netflix clone",
        "deployLink": "https://netflix-clone-50751.web.app/",
        "githubLink": "https://netflix-clone-50751.web.app/",
        "type": ["All Projects", "React Js"],
        "thumbnail": "1FVJu4f8QKly2_MR1A522jKEfU2wb736_",
        "photos": ["1FVJu4f8QKly2_MR1A522jKEfU2wb736_", "1Z3pOrGv1GNMyvKUQCmgKPrwk4eSmnDRO", "1xpRUS6GzWCTOeyeHlDx6RM8smv-wiFb-", "1iqLfx9jjid42evK3Yl4-R98ggH_SilDC"],
        "videos": ["sAF-uoA6sy0"],
    },
    // if (type === "all") setProjectSelection("All Projects")
    //     else if (type === "nodejs") setProjectSelection("Node Js")
    //     else if (type === "reactjs") setProjectSelection("React Js")
    //     else if (type === "ios") setProjectSelection("iOS")
    //     else if (type === "python") setProjectSelection("Python")
]


export default LatestProject