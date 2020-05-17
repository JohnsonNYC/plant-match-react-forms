import React from 'react';
import PlantCard from './PlantCard';

const MatchContainer = props => {
    return (
        <div className="results-container">
           {props.plants.map((plant, index) =>  <PlantCard {...plant} key={index}/>)}
        </div>
    )
}

export default MatchContainer;