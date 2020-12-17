import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
    return (
        <div className="cards" id={'projects'}>
            <h1>Some of My Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src="images/p1.png" text="Attendance System Using Facial Recognition" label="Pytorch" path="https://github.com/Shelby18k/Attendance-System-Using-Siamese-Network"/>
                        <CardItem src="images/ms.png" text="Customer Segmentation Using K-means" label="C" path="https://github.com/Shelby18k/CustomerSegmentation"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem src="images/p3.png" text="Neighborhood Map" label="React" path="https://github.com/Shelby18k/Neighborhood-Map"/>
                        <CardItem src="images/p4.png" text="Memory Game" label="HTML, CSS, Javascript" path="https://github.com/Shelby18k/Memory-Game"/>
                        {/* <CardItem src="images/img-2.jpg" text="Travel through the islands" label="Luxury" path="/services"/> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
