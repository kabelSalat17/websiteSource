import React from 'react'
import {Link} from 'react-router-dom'
import { MDBCard, MDBCardBody } from 'mdbreact';
import Image from '../images/education.svg'
import Link1 from '../files/Link.pdf'
import Link2 from '../files/Link2.pdf'



function Education() {
    return (
        <>
        <MDBCard style={{ width: "33vw", marginBottom:"1.5em" }}>
            <MDBCardBody className="d-flex justify-content-center">
                <img src={Image} alt="education"/>
                <h4 className="mt-2"> Education</h4>
            </MDBCardBody>
        </MDBCard>
        <MDBCard className="cardCv">
            <MDBCardBody className=" d-flex flex-column justify-content-center text-center">
                <h5 className="mt-2">Full Stack Development Student</h5>
                <h6><a href="https://www.start2impact.it/">Start2Impact</a></h6>
                <h6>2019 – 2020</h6>
                <h6 id="projectPosition"><Link to="/myprojects">Take a look to my projects!</Link></h6>
            </MDBCardBody>
        </MDBCard>
        <MDBCard className="cardCv ">
            <MDBCardBody className="d-flex flex-column justify-content-center text-center">
                <h5 id="fix1">Social, work and communication psychology</h5>
                <h6> Second cycle degree</h6>
                <h6>Università degli Studi di Padova</h6>
                <h6 id="fix1-sub">2016 – 2018</h6>
                <div className="visible-cv" >
                    <h6><Link to={Link1}>Download my Thesis</Link></h6>
                </div>
                <div className="hidden">
                    <h6 >Graduation Thesis: “Relationship between Leadership and Stress. A literature review. Score: 110/110 with highest honours. <br/><br/><br/></h6>
                    <h6><Link to={Link1}>Download my Thesis</Link></h6>
                </div>
            </MDBCardBody>
        </MDBCard>

        <MDBCard className="cardCv ">
            <MDBCardBody className="d-flex flex-column justify-content-center text-center">
                <h5 className="mt-2">Social and work psychology</h5>
                <h6> First cycle degree</h6>
                <h6>Università degli Studi di Padova</h6>
                <h6>2013 – 2016</h6>
                <div className="visible-cv" >
                    <h6><Link to={Link2}>Download my Thesis</Link></h6>
                </div>
                <div className="hidden">
                    <h6>Graduation Thesis: “Motivation to Lead, Followership e Servant Leadership. An empirical study.” Score: 110/110 with highest honours. <br/> <br/> <br/>  <Link to={Link1}>Download my Thesis</Link></h6>
                </div>
            </MDBCardBody>
        </MDBCard>
        </>
    )
}

export default Education
