import React, {useState,useEffect} from 'react';
import { MDBAnimation } from "mdbreact";
import Menu from './Menu';



const Navbar = ({positionNavbar}) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [animation,setAnimation] = useState(true)

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        return () => {
            window.removeEventListener('resize', () => setWidth(window.innerWidth))
        }
    }, [width])

    const onAnimationEnd = () => {
        setAnimation(false)
    }

    return (
        animation ? 
        <MDBAnimation type="fadeIn" delay="1.6s" onAnimationEnd={onAnimationEnd}>
            <Menu positionNavbar={positionNavbar} /> 
        </MDBAnimation>
        :
        <Menu positionNavbar={positionNavbar}  /> 
    )

}


export default Navbar;