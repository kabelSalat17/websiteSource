import React from "react";
import Navbar from '../Navbar/Navbar'
import '../../App.css';
import Title from "./Title";


const BackgroundImage = () => {
    return (
        <div className="bg">
            <Navbar positionNavbar={"top"} />
            <Title />
        </div>

    );
}

export default BackgroundImage;