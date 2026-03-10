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
        <>
        <div className="text-center row d-flex justify-content-center mt-5">
            <div className="col-3">
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`} />
            </div>
            <div className="col-3">
            <h1>{character.name}</h1>
            <p>Lucas has stated that the opening crawl was inspired by the opening crawls used at the beginning of each episode of the original Flash Gordon and Buck Rogers film serials, which were the inspiration for Lucas to write much of the Star Wars saga.[3] The development of the opening crawl came about as part of a collaboration between Lucas and the seasoned film title designer Dan Perri. In 1976, Lucas invited Perri to Industrial Light & Magic, Lucasfilm's post-production operation at Van Nuys, California. Perri, who had previously worked on Close Encounters of the Third Kind and The Exorcist, suggested that they take inspiration from the 1939 Cecil B. DeMille film Union Pacific, whose opening credits are shown distorted by a sharp perspective and rolling along a railroad track towards a distant vanishing point.[4][5] Lucas was keen on the idea, so Perri developed sketches and prototype mechanical artwork. One of the earliest iterations of the opening crawl is evidenced in storyboards drawn by the production artist Alex Tavoularis, depicting the title “THE STAR WARS” as a three-dimensional logo.[6]</p>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
            <p>Gender: {character.gender}</p>
            <p>Skin Color: {character.skin_color} </p>
            <p> Hair Color: {character.hair_color} </p>
            <p>Eye Color: {character.eye_color} </p>
            <p>Height: {character.height} </p>
            <p>Mass: {character.mass} </p>
            <p>Birth Year: {character.birth_year} </p>
        </div>
        </>
    );
};
