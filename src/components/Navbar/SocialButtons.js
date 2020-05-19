import React from 'react';
import {  MDBContainer } from 'mdbreact';


const SocialButtons = () => {
    return (
        <MDBContainer>
                <a  className="btn-floating btn-lg btn-git hvr-float-shadow" type="button" role="button" href={'https://github.com/kabelSalat17'} id="git" ><i className="fab fa-github"></i></a>
                <a className="btn-floating btn-lg btn-li hvr-float-shadow" type="button" role="button" href={'https://linkedin.com/in/matteo-brandolino'} id="linkedin"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn-floating btn-lg btn-email hvr-float-shadow" type="button" role="button" href={'https://mail.google.com/mail/?view=cm&fs=1&to=matteo.brandolino@gmail.com'} id="mail"><i className="fas fa-envelope"></i></a>
        </MDBContainer>
    );
}

export default SocialButtons;