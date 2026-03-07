import { Link } from "react-router-dom";

export const Navbar = () => {
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
              Favorites
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};
