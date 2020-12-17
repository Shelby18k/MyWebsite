import React from 'react'
import '../../App.css'
import './Services.css'
import me from "../../public/images/Me.jpg"


export default function Services() {
    return (
        <div className="services">
            <div className="container">
                <div className="description">
                    <h2>About Me!</h2>
                    <p>Hi!. I am the first year PhD student at University of Pittsburgh majoring in Artificial Intelligence.
                        My interests include finding the solutions to the problems faced by the society with the help of Machine Learning and
                        Deep Learning. I am an avid learner and always love to try my hands on new technologies.
                        My hobbies include travelling, solving coding problems, reading books.<br></br>
                        Want to know more about me? Contact me.

                    </p>
                </div>
                <div className="image">
                    <img src={me} alt="Me"/>
                </div>
            </div>
        </div>
    )
}