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
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${id}.jpg?raw=true`} />
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Diameter: {planet.diameter}</p>
            <p>Rotational Period: {planet.rotation_period}</p>
            <p>Orbital Period: {planet.orbital_period}</p>
            {/* …other fields if you like… */}
        </div>
    );
};