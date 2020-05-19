import React from 'react';
import { MDBCol, MDBCardTitle } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import ColoredTitle from '../Title/ColoredTitle'



function Title() {
    return (
        <>
        <MDBCol className="text-white text-center pt-5 mt-5">
            <MDBCol className="py-5">
                <MDBAnimation type="fadeInRight" >
                    <MDBCardTitle className="h1-responsive pt-5 mb-5 font-bold container-title ">
                        <MDBAnimation type="fadeIn" >Hello,my name is</MDBAnimation>
                        <MDBAnimation type="fadeInLeft" delay="0.3s" >
                            <ColoredTitle/>
                        </MDBAnimation> 
                    </MDBCardTitle>
                </MDBAnimation>
                <MDBAnimation type="fadeIn" delay="0.9s" >
                    <h5 className="container-subText">A Web Developer that trasforms caffeine into websites </h5>
                </MDBAnimation>
                <MDBAnimation type="fadeIn" delay="1.2s" >
                        <p className="container-sub-title"><span id="creativity">„ CREATIVITY</span > <span id="mid-text">is very</span> <span id="logic">LOGICAL“</span></p>
                </MDBAnimation>
            </MDBCol>
        </MDBCol>
        </>
    )
}

export default Title
