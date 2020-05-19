import React, {useState} from 'react'
import { MDBRow, MDBCol } from "mdbreact";
import Image from '../images/ReactNode.jpg'
import Project from './Project'
import Video1 from '../images/ReactNode/WasteManager2.0.mp4'
import Video2 from '../images/ReactNode/Auth.mp4'
import Video3 from '../images/ReactNode/MyMovieWebsite.mp4'
import Video4 from '../images/ReactNode/Company.io.mp4'
import Video5 from '../images/ReactNode/RecipeApp.mp4'
import Video6 from '../images/ReactNode/restApi.mp4'




function ReactNode() {
    const [isHovering,setHovering] = useState(false)

    const handleMouseHover= ()=> {
        setHovering(!isHovering)
    } 
    const handleMouseHoverLeave = ()=> {
        setTimeout(() => setHovering(!isHovering), 20000 )
        ;
    }
    return (
        <div id="html-css">
        <MDBRow className="d-flex justify-content-around">
            <MDBCol size="4" className="d-flex justify-content-end " >
                <Project 
                    isHovering={isHovering} 
                    text={"WasteManager2.0"}
                    subText={"A Full Stack Web App using React,Express and Mongoose. Keep track of your incomes and expenses "}
                    video={Video1}
                    github={'https://github.com/kabelSalat17/wasteManager2.0'}
                />
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-start">
                <Project 
                    isHovering={isHovering} 
                    text={"Authentication"}
                    subText={"A complete authentication app with login and register using Mongoose, Express and Passport"}
                    video={Video2}
                    github={'https://github.com/kabelSalat17/Authentication'}
                />
            </MDBCol>

        </MDBRow>

        <MDBRow id="row" >
            <MDBCol size="4" className="d-flex justify-content-end align-items-center">
                <Project 
                        isHovering={isHovering} 
                        text={"MyMovieWebsite"}
                        subText={"An example of API use. A simple application to search a film in a database using React"}
                        video={Video3}
                        github={'https://github.com/kabelSalat17/myMovieWebsite'}
                />
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-center align-items-center">
                <img onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHoverLeave} src={Image} alt="html-css" id="img-project"/>
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-start align-items-center">
                <Project 
                    isHovering={isHovering} 
                    text={"Company.io"}
                    subText={"A Real Time Chat application with Node.js and Socket.io. Do you want to chat with your colleagues? Download it now."}
                    video={Video4}
                    github={'https://github.com/kabelSalat17/Company.io'}  
                />
            </MDBCol>
        </MDBRow>

        <MDBRow style={{marginTop:"0.25em"}} className="d-flex justify-content-around">
            <MDBCol size="4" className="d-flex justify-content-end">
                <Project 
                    isHovering={isHovering} 
                    text={"RecipeApp"}
                    subText={"What do we eat today? Find the best recipes with Recipe App and become the best chef in the world."}
                    video={Video5}
                    github={'https://github.com/kabelSalat17/RecipeApp'}  
                />
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-start">
                <Project 
                        isHovering={isHovering} 
                        text={"RestApi"}
                        subText={"A REST based API with all main methods(GET,POST,DELETE) using Node.js and Express"}
                        video={Video6}
                        github={'https://github.com/kabelSalat17/RestApi'} 
                />
            </MDBCol>
        </MDBRow>
        </div>
    )
}

export default ReactNode
