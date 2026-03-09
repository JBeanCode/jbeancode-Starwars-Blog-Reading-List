import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const CharactersPage = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        if (store?.characters) {
            const CharactersFound = store.characters.find(storeCharacter => storeCharacter.uid === id);
            if (CharactersFound) {
                setCharacter(CharactersFound.properties);
            }
        }
    }, [id, store.characters]);

    if (!character) {
        return <p>No Character Found</p>;
    }

    return (
        <div className="text-center mt-5">
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`} />
            <h1>{character.name}</h1>
            <p>Gender: {character.gender}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p> Hair Color: {character.hair_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Birth Year: {character.birth_year}</p>
        </div>
    );
};
