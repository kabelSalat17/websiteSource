import React from "react";
import { MDBCol} from "mdbreact";
import Image from '../images/link.jpg'

const Photo = () => {
    return (
        <MDBCol size="11" md="5" className="d-flex flex-column justify-content-center align-items-center text-center box-photo pb-0 mb-0">
            <img
                src={Image}
                className="rounded-circle z-depth-1 img-fluid mt-3 mb-1"
                alt="Sample avatar"
            />
            <h3>Web Developer</h3>
            <h6 className="black-text w-responsive mx-auto mb-5">
            A psychology background but always been interested in technology.I love to create something from nothing and to see my thoughts come true on the web. <br/> That's why I became a Web Developer.
            </h6>
        </MDBCol>

    );
}

export default Photo;