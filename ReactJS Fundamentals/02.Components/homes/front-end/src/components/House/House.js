import React from 'react';
import './House.css';

const House = props => (
    <div className="House">
        <img alt="house" src={props.imageUrl} />
    </div>
);

export default House;
