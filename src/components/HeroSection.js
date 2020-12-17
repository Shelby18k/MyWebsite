import React from 'react'
import { Button } from './Button'
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            {/* <video src="videos/video2.mp4" autoPlay loop muted /> */}
            <h1>Hello! To My Website</h1>
            <p>Head over to Projects Section to know about me?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">Mail Me</Button>
                {/* <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">Projects?
                </Button> */}
            </div>
        </div>
    )
}

export default HeroSection
