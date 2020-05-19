import React from 'react';
import { MDBAnimation } from "mdbreact";

function ColoredTitle() {
    return (
        <span className="d-flex hvr-underline-from-center"  id="title">
            <MDBAnimation  type="bounceInLeft" duration="2s">
                <span style={{marginLeft:"8px"}}>M</span>
            </MDBAnimation>
            <MDBAnimation type="flip" duration="2s">
                <span>a</span>
            </MDBAnimation>
            <MDBAnimation type="bounceInLeft" duration="2s">
                <span>t</span>
            </MDBAnimation>
            <MDBAnimation type="bounceInLeft" duration="2s">
                <span>t</span>
            </MDBAnimation>
            <MDBAnimation type="flip" duration="2s">
                <span>e</span>
            </MDBAnimation>
            <MDBAnimation  type="flip" duration="2s">
                <span style={{marginRight:"8px"}}>o</span>
            </MDBAnimation>

            <MDBAnimation type="bounceInLeft" duration="2s">
                <span>B</span>
            </MDBAnimation>
            <MDBAnimation type="bounceInLeft" duration="2s">
                <span>r</span>
            </MDBAnimation>
            <MDBAnimation type="flip" duration="2s">
                <span>a</span>
            </MDBAnimation>
            <MDBAnimation type="bounceInLeft" duration="2s">
                <span>n</span>
            </MDBAnimation>
            <MDBAnimation type="bounceInLeft" duration="2s">
                <span>d</span>
            </MDBAnimation>
            <MDBAnimation type="flip" duration="2s">
                <span>o</span>
            </MDBAnimation>
            <MDBAnimation type="bounceInLeft" duration="2s">
                <span>l</span>
            </MDBAnimation>
            <MDBAnimation type="flip" duration="2s">
                <span>i</span>
            </MDBAnimation>
            <MDBAnimation type="bounceInLeft" duration="2s">
                <span>n</span>
            </MDBAnimation>
            <MDBAnimation type="flip" duration="2s">
                <span>o</span>
            </MDBAnimation>
        </span>
    )
}

export default ColoredTitle
