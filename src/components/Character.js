// Write your Character component here

import React from 'react';

const Character = (props) => {
    const { characters } = props;
    return (
        <div className='character-wrapper'>
            <h2>{props.name}</h2>
            <h3>{props.birth_year}</h3>
            <h4>{props.gender}</h4>
            <h5>{props.eye_color}</h5>
            <h6>{props.hair_color}</h6>
        </div>
    )
}

export default Character;