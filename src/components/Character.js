// Write your Character component here

import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
    const { character } = props;
    return (
        <StyledCharacter>
            <h2>{character.name}</h2>
            <h3>{character.birth_year}</h3>
            <h4>{character.gender}</h4>
            <h5>{character.eye_color}</h5>
            <h6>{character.hair_color}</h6>
        </StyledCharacter>
    )
}

const StyledCharacter = styled.div`

`

export default Character;