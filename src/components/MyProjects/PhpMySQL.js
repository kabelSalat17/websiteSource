import React, {useState} from 'react'
import { MDBRow, MDBCol } from "mdbreact";
import Image from '../images/php.png'
import Project from './Project'
import Video1 from '../images/PHP&MySQL/jobfinder.mp4'
import Video2 from '../images/PHP&MySQL/todo-list.mp4'




function PhpMySQL() {
    const [isHovering,setHovering] = useState(false)

    const handleMouseHover= ()=> {
        setHovering(!isHovering)
    } 
    const handleMouseHoverLeave = ()=> {
        setTimeout(() => setHovering(!isHovering), 20000 )
        ;
    }
    
    return (
        <div id="php-mysql">
        <MDBRow className="d-flex justify-content-around">
            <MDBCol size="6" className="d-flex justify-content-start">
                <Project 
                    isHovering={isHovering} 
                    text={"JobFinder"}
                    subText={"Find your dream job on JobFinder. A Php and MySQL application."}
                    video={Video1}
                    github={'https://github.com/kabelSalat17/jobFinder'}
                />
            </MDBCol>
        </MDBRow>

        <MDBRow id="row" >
            <MDBCol size="12" className="d-flex justify-content-center align-items-center">
                <img onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHoverLeave} src={Image} alt="html-css" id="img-project"/>
            </MDBCol>
        </MDBRow>

        <MDBRow className="d-flex justify-content-around">
            <MDBCol size="6" className="d-flex justify-content-end">
                <Project 
                        isHovering={isHovering} 
                        text={"Todo-List"}
                        subText={"Terrible Memory? You need a Todo List. And you will never forget anything"}
                        video={Video2}
                        github={'https://github.com/kabelSalat17/Handwriting-To-Do-List'} 
                />
            </MDBCol>
        </MDBRow>
        </div>
    )
}

export default PhpMySQL
