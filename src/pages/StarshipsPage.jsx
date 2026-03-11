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
        <>
            <div className="text-center row d-flex justify-content-center mt-5 align-items-center">
                <div className="col-6">
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${id}.jpg?raw=true`} />
                </div>
                <div className="col-3">
                    <h1>{starship.name}</h1>
                    <p>Lucas has stated that the opening crawl was inspired by the opening crawls used at the beginning of each episode of the original Flash Gordon and Buck Rogers film serials, which were the inspiration for Lucas to write much of the Star Wars saga.[3] The development of the opening crawl came about as part of a collaboration between Lucas and the seasoned film title designer Dan Perri. In 1976, Lucas invited Perri to Industrial Light & Magic, Lucasfilm's post-production operation at Van Nuys, California. Perri, who had previously worked on Close Encounters of the Third Kind and The Exorcist, suggested that they take inspiration from the 1939 Cecil B. DeMille film Union Pacific, whose opening credits are shown distorted by a sharp perspective and rolling along a railroad track towards a distant vanishing point.[4][5] Lucas was keen on the idea, so Perri developed sketches and prototype mechanical artwork. One of the earliest iterations of the opening crawl is evidenced in storyboards drawn by the production artist Alex Tavoularis, depicting the title “THE STAR WARS” as a three-dimensional logo.[6]</p>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5 gap-3">
                <p><u>Model:</u> {starship.model}</p>
                <p><u>Consumables:</u> {starship.consumables}</p>
                <p><u>Cargo Capacity:</u> {starship.cargo_capacity}</p>
                <p><u>Passengers:</u> {starship.passengers}</p>
                <p><u>Crew:</u> {starship.crew}</p>
                <p><u>Cost in Credits:</u> {starship.cost_in_credits}</p>
                <p><u>Manufacturer:</u> {starship.manufacturer}</p>
            </div>
        </>
    );
};

