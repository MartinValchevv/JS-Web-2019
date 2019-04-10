import React from 'react';
import './HouseDetails.css';

const HouseDetails = props => (
    <div className="HouseDetails">
        <h1>Details</h1>
        <h2>{props.house.type}</h2>
        <div className="image">
            <img alt="houseDetails" src={props.house.imageUrl} />
        </div>
        <p>Description: {props.house.description}</p>
        <p>Price: $ {props.house.price}</p>
    </div>
);

export default HouseDetails;
