import React from 'react';
import Video from './Video'
import { MDBPopover, MDBPopoverBody } from "mdbreact";

function PopoverBody({video, subText, github}) {
    return (
        <>
        <div style={{marginBottom:"2px", textAlign:"center"}}>
            {subText}
        </div>
        <div className="d-flex justify-content-center flex-wrap">
            <MDBPopover
                clickable
                placement="bottom"
                popover
                id="popper1"
            >
            <button type="button" className="btn btn-outline-dark btn-sm">
                Watch me
            </button>
                <div>
                    <MDBPopoverBody>
                        <Video video={video} />
                    </MDBPopoverBody>
                </div>
            </MDBPopover>
            <button type="button" className="btn btn-outline-dark btn-sm">
                <a href={video}>Download</a>
            </button>
            <button type="button" className="btn btn-outline-dark btn-sm">
                <a href={github}>Github Source</a>
            </button>             
        </div>




            
        </>
    )
}

export default PopoverBody
