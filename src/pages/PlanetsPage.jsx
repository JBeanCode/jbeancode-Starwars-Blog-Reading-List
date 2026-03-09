import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const PlanetsPage = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();

    const [planet, setPlanet] = useState(null);

    useEffect(() => {
        if (store?.planets) {
            const PlanetFound = store.planets.find(storePlanet => storePlanet.uid === id);
            if (PlanetFound) {
                setPlanet(PlanetFound.properties);
            }
        }
    }, [id, store.planets]);

    if (!planet) {
        return <p>No Planet Found</p>;
    }

    return (
        <div className="text-center mt-5">
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`} />
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Population: {planet.population}</p>
            <p>Height: {planet.height}</p>
            <p>Mass: {planet.mass}</p>
            <p>Birth Year: {planet.birth_year}</p>
            {/* …other fields if you like… */}
        </div>
    );
};