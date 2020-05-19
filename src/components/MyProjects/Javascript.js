import React, {useState} from 'react'
import { MDBRow, MDBCol } from "mdbreact";
import Image from '../images/javascript.jpg'
import Project from './Project'
import Video1 from '../images/Javascript/WasteManager.mp4'
import Video2 from '../images/Javascript/WeatherApp.mp4'
import Video3 from '../images/Javascript/GamblingSnake.mp4'
import Video4 from '../images/Javascript/Battleship.mp4'
import Video5 from '../images/Javascript/FlagMemory.mp4'
import Video6 from '../images/Javascript/Whack a pig.mp4'




function Javascript() {
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
                    text={"WasteManager"}
                    subText={"A Web App designed for people that don't love to waste their money. Try my app and start to save! "}
                    video={Video1}
                    github={'https://github.com/kabelSalat17/WasteManager'}
                />
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-start">
                <Project 
                    isHovering={isHovering} 
                    text={"WeatherApp"}
                    subText={"Rain or no rain? That's the question. An example of API use. Watch the weather in your city."}
                    video={Video2}
                    github={'https://github.com/kabelSalat17/WeatherApp'}
                />
            </MDBCol>

        </MDBRow>

        <MDBRow id="row" >
            <MDBCol size="4" className="d-flex justify-content-end align-items-center">
                <Project 
                        isHovering={isHovering} 
                        text={"Gambling-Snake"}
                        subText={"Tired of the same classic snake? Try my snake with a gambling component. Pay attention to what you eat."}
                        video={Video3}
                        github={'https://github.com/kabelSalat17/GamblingSnake'}
                />
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-center align-items-center">
                <img onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHoverLeave} src={Image} alt="html-css" id="img-project"/>
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-start align-items-center">
                <Project 
                    isHovering={isHovering} 
                    text={"Battleship"}
                    subText={"Do you want to play Battleship with your friend but you don't have the board game? Download now."}
                    video={Video4}
                    github={'https://github.com/kabelSalat17/Battleship'}  
                />
            </MDBCol>
        </MDBRow>

        <MDBRow style={{marginTop:"0.25em"}} className="d-flex justify-content-around">
            <MDBCol size="4" className="d-flex justify-content-end">
                <Project 
                    isHovering={isHovering} 
                    text={"FlagMemory"}
                    subText={"Try this simple Memory game made by Javascript and find out all flags"}
                    video={Video5}
                    github={'https://github.com/kabelSalat17/FlagMemory'}  
                />
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-start">
                <Project 
                        isHovering={isHovering} 
                        text={"Whack a pig"}
                        subText={"Isn't it Whack a mole? Whack a pig!"}
                        video={Video6}
                        github={'https://github.com/kabelSalat17/Whack-a-Pig'} 
                />
            </MDBCol>
        </MDBRow>
        </div>
    )
}

export default Javascript
