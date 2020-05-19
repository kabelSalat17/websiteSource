import React from 'react'
import {MDBRow, MDBCol } from "mdbreact";
import Education from './Education';
import Work from './Work';

function Cv() {
    return (
        <>
        <MDBRow className="d-flex justify-content-center cv-container">
            <MDBCol  size="6" className="d-flex flex-column jusity-content-center align-items-center"><Education />
            </MDBCol>
            <MDBCol size="6" className="d-flex flex-column jusity-content-center align-items-center"> <Work /> </MDBCol>
        </MDBRow>
        </>
    )
}

export default Cv
