import React from 'react';
import Character from './Character';

const Characters = (props) => {
    const { characters } = props;
    return (
        <div className='characters-wrapper'>
            {characters.map(character => {
                return <Character character={character} />
            })}
        </div>
    )
}

export default Characters;