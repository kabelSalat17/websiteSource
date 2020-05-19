import React from 'react'
import {MDBRow} from "mdbreact";
import { MDBAnimation } from "mdbreact";
import Photo from './Photo';
import PillsSkill from './PillsSkill';
import Navbar from '../Navbar/Navbar';
import Footer from '../Home/Footer';
import Cv from './Cv';

function MyCv() {
    return (
        <div className="bg-mycv">   
            <Navbar positionNavbar={"fixed"}/>
                <div className="container-mycv ">
                    <MDBAnimation type="fadeIn" delay="1s">
                    <MDBRow className="d-flex justify-content-center align-items-center mt-3">
                        <Photo />
                        <PillsSkill />
                    </MDBRow>
                    </MDBAnimation>
                </div>
            <Cv />
            <Footer />
        </div> 
    )
}

export default MyCv

