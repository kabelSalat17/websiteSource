import React from 'react'
import {Link} from 'react-router-dom'
import { MDBCard, MDBCardBody } from 'mdbreact';
import Link3 from '../files/Link3.pdf'
import Image from '../images/work.svg'




function Work() {
    return (
        <>
        <MDBCard style={{ width: "33vw", marginBottom:"1.5em" }}>
            <MDBCardBody className="d-flex justify-content-center">
                <img src={Image} alt="education"/>
                <h3 className="mt-2"> Work</h3>
            </MDBCardBody>
        </MDBCard>
        
        <MDBCard className="cardCv">
            <MDBCardBody className=" d-flex flex-column justify-content-center text-center">
                <h5 className="mt-2">EVS Workers</h5>
                <h6>Chemntiz,Germany</h6>
                <h6>11/2019 – 09/2020</h6>
                <div className="visible-cv">
                    <h6>Discover what EVS is <Link to="/https://europeanvoluntaryservice.org/">here</Link></h6>
                </div>
                <div className="hidden">
                    <h6>EVS give me the opportunity to study a new language, improve my English and work in an internation enviroment. <br/> <br/> Discover What EVS is <Link to="/https://europeanvoluntaryservice.org/">here.</Link></h6>
                </div>
            </MDBCardBody>
        </MDBCard>

        <MDBCard className="cardCv">
            <MDBCardBody className=" d-flex flex-column justify-content-center text-center">
                <h5 className="mt-3">HR Generalist</h5>
                <h6>StayOver, Treviso</h6>
                <h6>06/2018 – 05/2019</h6>
                <div className="visible-cv">
                    <h6><Link to={Link3}>Download my Full Cv</Link></h6>
                </div>
                <div className="hidden">
                    <h6>• Recruitment: Job posting, candidate screening and interviews</h6>
                    <h6>• Staff management: planning, monitoring, and appraising job results, planning, organizing and coordinating work team, employee relations</h6>
                    <h6>• Main referent for temporary agencies</h6>
                </div>
            </MDBCardBody>
        </MDBCard>
        <MDBCard className="cardCv">
            <MDBCardBody className=" d-flex flex-column justify-content-center text-center">
                <h5 className="mt-2">HR Intern</h5>
                <h6> Umana Spa, Treviso</h6>
                <h6>03/2018 – 06/2018</h6>
                <div className="visible-cv">
                    <h6><Link to={Link3}>Download my Full Cv</Link></h6>
                </div>
                <div className="hidden">
                    <h6>• Recruitment: Job posting, candidate screening and interviews</h6>
                    <h6>• Job posting</h6>
                    <h6>• candidate screening and interviews</h6>
                    <h6>• front office</h6>
                </div>
            </MDBCardBody>
        </MDBCard>
        </>
    )
}

export default Work

