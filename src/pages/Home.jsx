import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { StarshipsCard } from "../components/StarshipsCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import useActions from "../hooks/useActions.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const { getCharacters, getPlanets, getStarships } = useActions();

  useEffect(() => {
    getCharacters();
    getPlanets();
    getStarships();
  }, []);

  return (
    <div className="starWarsCards">
      <h1 className="text-danger">Characters</h1>
      <div className="characterRow d-flex">
        {store?.characters.map((character) => (
          <CharacterCard
            key={character._id || index}
            name={character.properties.name}
            id={character.uid}
            hair_color={character.properties.hair_color}
            gender={character.properties.gender}
            eye_color={character.properties.hair_color}
          />
        ))}
      </div>
      <h1 className="text-danger">Planets</h1>
      <div className="planetRow d-flex">
        {store?.planets.map((planet) => (
          <PlanetCard
            key={planet._id || index}
            name={planet.properties.name}
            id={planet.uid}
            population={planet.properties.population}
            terrain={planet.properties.terrain}
            gravity={planet.properties.gravity}
          />
        ))}
      </div>
      <h1 className="text-danger mb-0">Starships</h1>
      <div className="starshipsRow d-flex">
        {store?.starships.map((starship) => (
          <StarshipsCard
            key={starship._id || index}
            name={starship.properties.name}
            id={starship.uid}
            passengers={starship.properties.passengers}
            length={starship.properties.length}
            model={starship.properties.model}
          />
        ))}
      </div>
    </div>
  );
};
