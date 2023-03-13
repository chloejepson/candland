import React from 'react'
import Navbar from "./Navbar"
import image from "./img/CandyLand2004Board.webp"

export default function LandingPage(){
    return(
        <div className="home-container">
            <Navbar/>
            <div style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat", backgroundSize:"contain", height:550, width:2000}}>
            </div>
        </div>
        
    )
}