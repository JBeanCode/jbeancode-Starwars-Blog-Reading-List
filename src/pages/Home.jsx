import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { FilmsCard } from "../components/FilmsCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="row">
      <div className="characterRow d-flex">
        <CharacterCard />
      </div>
      <div className="planetRow d-flex">
        <PlanetCard />
      </div>
      <div className="filmsRow d-flex">
        <FilmsCard />
      </div>
    </div>
  );
};
