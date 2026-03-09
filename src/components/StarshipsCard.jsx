import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const StarshipsCard = ({ name, model, passengers, length, id }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <div className=" card starshipsCard" style={{ width: 18 + "rem" }}>
        <img
          src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${id}.jpg?raw=true`}
          className="card-img-top"
          alt={`No image found for ${name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="model">Model: {model}</p>
          <p className="passengers">Passengers: {passengers}</p>
          <p className="length">Length: {length}</p>
          <Link to={`/starships/${id}`}>
            <button className="btn btn-primary">Learn More!</button>
          </Link>
          <a
            href="#"
            className="btn btn-warning ms-4"
            onClick={() =>
              dispatch({
                type: "toggle_favorite",
                payload: { name: name, uid: id, kind: "starships" },
              })
            }
          >{`Favorite`}</a>
        </div>
      </div>
    </div>
  );
};
