// Write your Character component here

import React from 'react';
import styled from 'styled-components';

import theme from '../theme/index';

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
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100vw;

    color: ${theme.white};

    transition: all .3s ease-in-out;
    &:hover {
        background-color: ${theme.black};
        transition: all .3s ease-in-out;
    }

    h2 {
        color: turquoise;
        color: ${theme.primaryColor};
    }

    h3 {
        color: ${theme.secondaryColor};
    }

    h4 {
        color: ${theme.tertiaryColor};
    }

    h5 {
        color: ${theme.quaternaryColor};
    }

    h6 {
        color: ${theme.quinaryColor};
    }
`

export default Character;