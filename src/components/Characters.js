import React from 'react';
import Character from './Character';

const Characters = (props) => {
    return (
        <div className='characters-wrapper'>
            {characters.map(character => {
                return <Character characters={characters} />
            })}
        </div>
    )
}