import React, {useState} from 'react'
import { MDBRow, MDBCol } from "mdbreact";
import Image from '../images/html-css.png'
import Project from './Project'
import Video1 from '../images/HTML&CSS/TargetMenu.mp4'
import Video2 from '../images/HTML&CSS/CoffeBar.mp4'
import Video3 from '../images/HTML&CSS/Blog.mp4'
import Video4 from '../images/HTML&CSS/Homepage.mp4'




function HtmlCss() {
    const [isHovering,setHovering] = useState(false)

    const handleMouseHover= ()=> {
        setHovering(!isHovering)
    } 
    const handleMouseHoverLeave = ()=> {
        setTimeout(() => setHovering(!isHovering), 20000 )
        ;
    }
    
    return (
        <div id="html-css">
        <MDBRow className="d-flex justify-content-around">
            <MDBCol size="4" className="d-flex justify-content-end">
                <Project 
                    isHovering={isHovering} 
                    text={"BurgerMenu"}
                    subText={"A responsive Navigation Bar with slide effect and burger animation using HTML,CSS and a little bit of Javascript."}
                    video={Video1}
                    github={'https://github.com/kabelSalat17/targetBurgerMenu'}
                />
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-start">
                <Project 
                        isHovering={isHovering} 
                        text={"CoffeeBar"}
                        subText={"A responsive Navigation Bar with animation and transitions using pseudo-classes and hover effects"}
                        video={Video2}
                        github={'https://github.com/kabelSalat17/coffeeBar'}
                />
            </MDBCol>
        </MDBRow>

        <MDBRow id="row" >
            <MDBCol size="12" className="d-flex justify-content-center align-items-center">
                <img onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHoverLeave} src={Image} alt="html-css" id="img-project"/>
            </MDBCol>
        </MDBRow>

        <MDBRow className="d-flex justify-content-around">
            <MDBCol size="4" className="d-flex justify-content-end">
                <Project 
                    isHovering={isHovering} 
                    text={"PizzaTheme"}
                    subText={"A pizza website template for all pizza lovers. Recipe? HTML,CSS and pinch of Javascript"}
                    video={Video3}
                    github={'https://github.com/kabelSalat17/PizzaTheme'}  
                />
            </MDBCol>
            <MDBCol size="4" className="d-flex justify-content-start">
                <Project 
                        isHovering={isHovering} 
                        text={"Homepage"}
                        subText={"A food-blog homepage using mostly HTML and CSS...Come look at the carousel created with Owl-Carousel!"}
                        video={Video4}
                        github={'https://github.com/kabelSalat17/FoodBlog-Homepage'} 
                />
            </MDBCol>
        </MDBRow>
        </div>
    )
}

export default HtmlCss
