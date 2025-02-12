import React, { useEffect, useState } from 'react';
import CharacterCard from "./CharacterCard";

function CharacterList(){
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/characters")
        .then(response => response.json())
        .then(setCharacters)
    }, [])

    return (
        <div className="character-list">
            <ul>
                {characters.map((character) => {
                    return <CharacterCard key={character.id} character={character}/>
                })}
            </ul>
        </div>
    )
}

export default CharacterList;
