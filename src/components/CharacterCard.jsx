
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useActions from "../hooks/useActions.jsx";
import storeReducer from "../store.js";

export const CharacterCard = ({name, hair_color, gender, eye_color }) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <div className=" card characterCard" style={{width: 18 + "rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="gender">Gender: {gender}</p>
                        <p className="hairColor">Hair color: {hair_color}</p>
                        <p className="eyeColor">Eye color: {eye_color}</p>
                        <a href="#" className="btn btn-primary">Learn More!</a>
                    </div>
            </div>
        </div>
    );
}; 



