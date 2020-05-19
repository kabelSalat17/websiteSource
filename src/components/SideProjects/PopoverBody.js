import React from 'react';

function PopoverBody({ subText, github}) {
    return (
        <>
        <div style={{marginBottom:"2px", textAlign:"center"}}>
            {subText}
        </div>
        <div className="d-flex justify-content-center flex-wrap">
            <button type="button" className="btn btn-outline-dark btn-sm">
                <a href={github}>Github Source</a>
            </button>      
        </div>   
        </>
    )
}

export default PopoverBody