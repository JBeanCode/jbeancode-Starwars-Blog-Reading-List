import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  const allFavorites = [
    ...store.favorites.characters.map(item => ({ ...item, kind: 'characters' })),
    ...store.favorites.planets.map(item => ({ ...item, kind: 'planets' })),
    ...store.favorites.starships.map(item => ({ ...item, kind: 'starships' })),
  ];

  const getLinkPath = (favorite) => {
    return `/${favorite.kind}/${favorite.uid}`;
  };

  const handleDeleteFavorite = (favorite, event) => {
    event.preventDefault(); // Prevent navigation
    dispatch({ type: "toggle_favorite", payload: { uid: favorite.uid, name: favorite.name, kind: favorite.kind } });
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              className="starWarsLogo"
              style={{ height: "30px" }}
              src="src/assets/img/StarWarsLogo.png"
              alt="..."
            />
          </span>
        </Link>
        <div className="">
            <button
              className="btn btn-warning dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites ({allFavorites.length})
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {allFavorites.length === 0 ? (
                <li>
                  <a className="dropdown-item" href="#">
                    No favorites yet
                  </a>
                </li>
              ) : (
                allFavorites.map((favorite, index) => (
                  <li key={index}>
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <Link to={getLinkPath(favorite)} className="text-decoration-none">
                        {favorite.name}
                      </Link>
                      <button
                        className="btn btn-sm btn-outline-danger ms-2"
                        onClick={(event) => handleDeleteFavorite(favorite, event)}
                        title="Remove from favorites"
                      >
                        ×
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
        </div>
      </div>
    </nav>
  );
};
