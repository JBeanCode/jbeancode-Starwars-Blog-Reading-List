
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useActions from "../hooks/useActions.jsx";
import storeReducer from "../store.js";

export const CharacterCard = () => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="text-center mt-5">
            {/* {store?.characters.map} */}
            <div className="card" style={{width: 18 + "rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    );
}; 



