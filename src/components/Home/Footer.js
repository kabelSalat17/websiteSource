import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';


const FooterPage = () => {
    return (
        <MDBFooter className="font-small footer">
        <MDBContainer className="text-center text-md-left ">
            <MDBRow>
            <MDBCol size="12" className="d-flex justify-content-center">
                <h5 className="title mt-3 black-text">Links</h5>
            </MDBCol>
            <MDBCol size="12" className="d-flex justify-content-center col-links black-text">
                <Link to="/myprojects" ><h6 className="black-text">My projects</h6></Link>
                <Link to="/mycv" ><h6 className="black-text">My Cv</h6></Link>
                <Link to="/blockchain" ><h6 className="black-text">Blockchain</h6></Link>
            </MDBCol>
            <MDBCol size="12" className=" d-flex justify-content-center">
                <a  className="btn-floating btn-lg btn-git hvr-float-shadow" type="button" role="button" href={'https://github.com/kabelSalat17'} id="git" ><i className="fab fa-github"></i></a>
                <a className="btn-floating btn-lg btn-li hvr-float-shadow" type="button" role="button" href={'https://linkedin.com/in/matteo-brandolino'} id="linkedin"><i className="fab fa-linkedin-in"></i></a>
                <a target="_top" className="btn-floating btn-lg btn-email hvr-float-shadow" type="button" role="button" href={'https://mail.google.com/mail/?view=cm&fs=1&to=matteo.brandolino@gmail.com'} id="mail"><i className="fas fa-envelope"></i></a>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
            <MDBContainer >
            &copy; 2020 Copyright: <a href="https://github.com/kabelSalat17"> Matteo Brandolino</a>
            </MDBContainer>
        </div>
        </MDBFooter>
    );
}

export default FooterPage;