import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const StarshipsPage = () => {
    const { store } = useGlobalReducer();
    const { id } = useParams();

    const [starship, setStarship] = useState(null);

    useEffect(() => {
        if (store?.starships) {
            const StarshipFound = store.starships.find(storeStarship => storeStarship.uid === id);
            if (StarshipFound) {
                setStarship(StarshipFound.properties);
            }
        }
    }, [id, store.starships]);

    if (!starship) {
        return <p>No Starship Found</p>;
    }

    return (
        <div className="text-center mt-5">
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${id}.jpg?raw=true`} />
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
            <p>Consumables: {starship.consumables}</p>
            <p>Cargo Capacity: {starship.cargo_capacity}</p>
            <p>Passengers: {starship.passengers}</p>
            <p>Crew: {starship.crew}</p>
            <p>Cost in Credits: {starship.cost_in_credits}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            {/* …other fields if you like… */}
        </div>
    );
};

