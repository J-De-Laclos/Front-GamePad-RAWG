import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ search, setSearch, handleToken, token }) => {
  console.log(token);
  return (
    <div className="header">
      <div className="logo-search">
        <Link to="/">
          <span className="logo-rawg">RAWG</span>
        </Link>
        <input
          value={search}
          type="search"
          placeholder="Rechercher un jeu"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
      {token ? (
        <button
          className="btnDeconnexion"
          onClick={() => {
            handleToken(null);
          }}
        >
          LOG OUT
        </button>
      ) : (
        <div className="signup-login">
          <Link to="/user/login">
            <span>LOG IN</span>
          </Link>

          <Link to="/user/signup">
            <span>SIGN UP</span>
          </Link>
          <span>API</span>
          <span className="icon">
            <FontAwesomeIcon icon="bars" />
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
