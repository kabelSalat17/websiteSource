import React from 'react'
import BackgroundImage from './Home/BackgroundImage'
import CarouselPage from './Home/CarouselPage'
import Footer from './Home/Footer'


function Home() {
    return (
        <div>
            <BackgroundImage />
            <div className="bg-2 d-flex align-items-center ">
                <CarouselPage />
            </div>
            <Footer />

            
        </div>
    )
}

export default Home
