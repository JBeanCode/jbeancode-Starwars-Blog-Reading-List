import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useActions from "../hooks/useActions.jsx";
import storeReducer from "../store.js";
import { Link } from "react-router-dom";

export const CharacterCard = ({name, hair_color, gender, eye_color, id }) => {

    const { store, dispatch } = useGlobalReducer()

    //need to add pictures based on this URL - should be dynamic - tag below:
    // <img
    //     src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/${type}/${element.uid}.jpg?raw=true`}
    //     className="card-img mt-2"
    //     alt={`No image found for ${element.properties.name}`}
    //   />

    return (
        <div className="text-center mt-5">
            <div className=" card characterCard" style={{width: 18 + "rem"}}>
                <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${id}.jpg?raw=true`} className="card-img-top" alt={`No image found for ${name}`}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="gender">Gender: {gender}</p>
                        <p className="hairColor">Hair color: {hair_color}</p>
                        <p className="eyeColor">Eye color: {eye_color}</p>
                        <Link to={`/characters/${id}`}>
                        <button className="btn btn-primary">Learn More!</button>
                        </Link>
                        <a href="#" className="btn btn-warning ms-4" onClick={ () => dispatch({type: "toggle_favorite", payload: {name: name, uid: id, kind: "characters"}})}>{`Favorite`}</a>
                    </div>
            </div>
        </div>
    );
}; 



