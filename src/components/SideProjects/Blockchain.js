import React, {useState} from 'react'
import { MDBRow, MDBCol } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import Image from '../images/solidity.png'
import Project from './Project'
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer';





function Blockchain() {
    const [isHovering,setHovering] = useState(false)

    const handleMouseHover= ()=> {
        setHovering(!isHovering)
    } 
    const handleMouseHoverLeave = ()=> {
        setTimeout(() => setHovering(!isHovering), 20000 )
        ;
    }
    
    return (
        <div className="bg-projects">
        <Navbar positionNavbar={"default"}/>
        <MDBAnimation type="fadeIn" delay="1s">
        <div className="heightBlockchain">
        <MDBRow className="d-flex justify-content-around">
            <MDBCol size="6" className="d-flex justify-content-start">
                <Project 
                    isHovering={isHovering} 
                    text={"CRUD"}
                    subText={"An example of basic functions of a computer database using Solidity."}
                    github={'https://github.com/kabelSalat17/CRUD'}
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
                        text={"Dapp Todo-list"}
                        subText={"An example of a Decentralized Application using solidity"}
                        github={'https://github.com/kabelSalat17/DAPP-Todo'} 
                />
            </MDBCol>
        </MDBRow>
        </div>
        </MDBAnimation>
        <Footer />
        </div>
    )
}

export default Blockchain
