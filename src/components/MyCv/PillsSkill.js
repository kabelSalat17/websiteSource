import React, {useState} from "react";
import { MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import ProgressBar from "./ProgressBar";
import RadarPage from "./Radar";


function PillsSkill() {
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
            <MDBCol size="11" md="5" className="box-skills">
                <h3 className="text-center">My Skills</h3>
                <MDBNav className="mb-3 nav-pills d-flex justify-content-center">
                    <MDBNavItem >
                        <MDBNavLink  link to="charts" active={state.items["default"] === "1"} onClick={togglePills("default", "1")} className="fontStyle" >
                            Charts
                        </MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink link to="radar" active={state.items["default"] === "2"} onClick={togglePills("default", "2")} className="fontStyle" >
                            Radar
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNav>
                <MDBTabContent activeItem={state.items["default"]}>
                    <MDBTabPane tabId="1">
                        <ProgressBar />
                    </MDBTabPane>
                    <MDBTabPane tabId="2">
                        <RadarPage />
                    </MDBTabPane>
                </MDBTabContent>
        </MDBCol>
    )
}

export default PillsSkill
