import React from "react";
import { MDBProgress } from 'mdbreact';

const ProgressBar = () => {
    return (
    <>
        <h6>HTML</h6>
        <MDBProgress animated  barClassName="color-bar" value={75} className="my-1 bar" ><h6 className="mt-1">75%</h6></MDBProgress>

        <h6>CCS</h6>
        <MDBProgress animated  barClassName="color-bar" value={75} className="my-1 bar" ><h6 className="mt-1">75%</h6></MDBProgress>

        <h6>JAVASCRIPT</h6>
        <MDBProgress animated  barClassName="color-bar" value={70} className="my-1 bar" ><h6 className="mt-1">70%</h6></MDBProgress>

        <h6>REACT</h6>
        <MDBProgress animated  barClassName="color-bar" value={70} className="my-1 bar" ><h6 className="mt-1">70%</h6></MDBProgress>

        <h6>NODE</h6>
        <MDBProgress animated  barClassName="color-bar" value={60} className="my-1 bar" ><h6 className="mt-1">60%</h6></MDBProgress>

        <h6>PHP</h6>
        <MDBProgress animated  barClassName="color-bar" value={50} className="my-1 bar" ><h6 className="mt-1">50%</h6></MDBProgress>

        <h6>MYSQL</h6>
        <MDBProgress animated  barClassName="color-bar" value={50} className="my-1 bar" ><h6 className="mt-1">50%</h6></MDBProgress>
    </>
    );
}

export default ProgressBar;