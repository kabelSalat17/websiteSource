import React from 'react'
import Icon from '../images/icon.svg'
import { MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdbreact';
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn } from "mdbreact";
import PopoverBody from './PopoverBody';




function Project({isHovering, text, video, subText, github}) {


    return (
        <>
        <MDBPopover
            placement="top"
            popover
            clickable
            id="popper1"
        >
        <MDBBtn color="trasparent" className={`styleCard ${isHovering ? 'visible': 'invisible'}`}>
                <MDBCardImage className="styleIcon" src={Icon} />
                <MDBCardBody>
                    <MDBCardTitle className="textIcon">{text}</MDBCardTitle>
                </MDBCardBody>
        </MDBBtn>
            <div>
                <MDBPopoverHeader>{text}</MDBPopoverHeader>
                <MDBPopoverBody>
                    <PopoverBody video={video} subText={subText} github={github} />
                </MDBPopoverBody>
            </div>
        </MDBPopover>

        </>
    )
}

export default Project
