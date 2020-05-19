import React from "react";
import {Link} from 'react-router-dom';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import Img1 from '../images/Home/html-css.jpg'
import Img2 from '../images/Home/javascript.jpg'
import Img3 from '../images/Home/reactNode.jpg'
import Img4 from '../images/Home/phpMySql.png'

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
      activeItem={1}
      length={4}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={Img1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <Link to="/myprojects">
              <h3 className="h3-responsive text-white">HTML & CSS</h3>
            </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={Img2}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
          <Link to="/myprojects">
              <h3 className="h3-responsive text-white">Javascript</h3>
          </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
          <img
              className="d-block w-100"
              src={Img3}
              alt="First slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
          <Link to="/myprojects">
              <h3 className="h3-responsive text-white">React & Node</h3>
          </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="4">
          <MDBView>
          <img
              className="d-block w-100"
              src={Img4}
              alt="First slide"
            />
          <MDBMask overlay="black-slight" />
          </MDBView>
          <MDBCarouselCaption>
          <Link to="/myprojects">
              <h3 className="h3-responsive text-white">Php & MySQL</h3>
          </Link>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;