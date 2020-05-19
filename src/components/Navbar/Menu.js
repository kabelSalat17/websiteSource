import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import SocialButtons from "./SocialButtons";
import home from'../images/home.svg';


const Menu = ({positionNavbar}) =>  {
    const [state,setState] = useState({
        isOpen: false
    })

    const toggleCollapse = () => {
        setState({ isOpen: !state.isOpen });
    }

    return (
        <MDBNavbar style = {{ paddingBottom: ".2em"}} light scrolling transparent color="indigo" fixed={positionNavbar} expand="md">
            <MDBNavbarBrand>
                <Link to="/"><img src={home} alt="home"/></Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
            <MDBNavbarNav left>
                <MDBNavItem>
                    <MDBNavLink to="/" className="fontStyle hvr-underline-from-left" >Home</MDBNavLink>
                </MDBNavItem >
                <MDBNavItem >
                    <MDBNavLink to="/myprojects" className="fontStyle hvr-underline-from-left">My Projects</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem >
                    <MDBNavLink to="/mycv" className="fontStyle hvr-underline-from-left">My CV</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem > 
                    <MDBNavLink to="/blockchain" className="fontStyle hvr-underline-from-left">Blockchain</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <SocialButtons />
            </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    );
}


export default Menu;