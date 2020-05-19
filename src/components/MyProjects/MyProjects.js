import React, {useState} from "react";
import { MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { MDBAnimation } from "mdbreact";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer";
import HtmlCss from "./HtmlCss";
import Javascript from "./Javascript";
import ReactNode from "./ReactNode";
import PhpMySQL from "./PhpMySQL";

function MyProjects() {
    const [state,setState] = useState({
        items: {
        default: "1",
        }
    });
    
    const togglePills = (type, tab) => e => {
        e.preventDefault();
        if (state.items[type] !== tab) {
            let items = { ...state.items };
            items[type] = tab;
            setState({
                items
            });
        }
    };

    
    return (
        <div className="bg-projects">   
            <Navbar positionNavbar={"default"}/>
                <MDBAnimation type="fadeIn" delay="1s">
                <div className="mt-4 container-pills">
                    <MDBRow>
                        <MDBCol md="12">
                        <h1 className="text-center">My Projects</h1>
                        <MDBNav className="mb-5 nav-pills d-flex justify-content-center">
                            <MDBNavItem >
                                <MDBNavLink  link to="html-css" active={state.items["default"] === "1"} onClick={togglePills("default", "1")} className="fontStyle" >
                                    HTML&CSS
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink link to="#" active={state.items["default"] === "2"} onClick={togglePills("default", "2")} className="fontStyle" >
                                    JAVASCRIPT
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink link to="#" active={state.items["default"] === "3"} onClick={togglePills("default", "3")} className="fontStyle">
                                    REACT&NODE
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink link to="#" active={state.items["default"] === "5"} onClick={togglePills("default", "4")} className="fontStyle" >
                                    PHP&SQL
                                </MDBNavLink>
                            </MDBNavItem>
                        </MDBNav>
                        <MDBTabContent activeItem={state.items["default"]}>
                            <MDBTabPane tabId="1">
                                <HtmlCss />
                            </MDBTabPane>
                            <MDBTabPane tabId="2">
                                <Javascript />
                            </MDBTabPane>
                            <MDBTabPane tabId="3">
                                <ReactNode />
                            </MDBTabPane>
                            <MDBTabPane tabId="4">
                                <PhpMySQL />
                            </MDBTabPane>
                        </MDBTabContent>
                        </MDBCol>
                    </MDBRow>
                </div>
                </MDBAnimation> 
            <Footer />
        </div>
    )
}

export default MyProjects
