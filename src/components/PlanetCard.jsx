import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useActions from "../hooks/useActions.jsx";
import storeReducer from "../store.js";
import { Link } from "react-router-dom";

export const PlanetCard = ({ name, population, terrain, gravity, id }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <div className=" card planetCard" style={{ width: 18 + "rem" }}>
        <img
          src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${id}.jpg?raw=true`}
          className="card-img-top"
          alt={`No image found for ${name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="gender">Population: {population}</p>
          <p className="hairColor">Terrain: {terrain}</p>
          <p className="eyeColor">Gravity: {gravity}</p>
          <Link to={`/planets/${id}`}>
            <button className="btn btn-primary">Learn More!</button>
          </Link>
          <a
            href="#"
            className="btn btn-warning ms-4"
            onClick={() =>
              dispatch({
                type: "toggle_favorite",
                payload: { name: name, uid: id, kind: "planets" },
              })
            }
          >{`Favorite`}</a>
        </div>
      </div>
    </div>
  );
};
