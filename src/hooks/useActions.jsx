import useGlobalReducer from "./useGlobalReducer";

const useActions = () => {
    const {store, dispatch} = useGlobalReducer();

    const getCharacters = async() => {
        const response = await fetch("https://www.swapi.tech/api/people/?expanded=true", {
            method: "GET"
        }
        );
            if (!response.ok) {
                console.log("error: ", response.status, response.statusText);
                return;
            }
            const data = await response.json();
            dispatch({type: 'add_characters', payload: data.results});
            return data
	};

    return{getCharacters}
  };

export default useActions;