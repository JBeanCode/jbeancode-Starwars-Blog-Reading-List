import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const StarshipsCard = ({name, model, passengers, length}) => {

    const { store, dispatch } = useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <div className=" card starshipsCard" style={{width: 18 + "rem"}}>
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="model">Model: {model}</p>
                        <p className="passengers">Passengers: {passengers}</p>
                        <p className="length">Length: {length}</p>
                        <a href="#" className="btn btn-primary">Learn More!</a>
                    </div>
            </div>
        </div>
    );
}; 