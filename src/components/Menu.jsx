import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  return (
    <section className="menu">
      <Link to="/">
        <h2>Home</h2>
      </Link>

      <Link to="/favorites">
        <h2>Favorites</h2>
      </Link>

      <Link to="/reviews/popular">
        <h2>Reviews</h2>
      </Link>

      <h2>New Releases</h2>
      <Link to="/discover/last-30-days">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>Last 30 days</p>
        </div>
      </Link>

      <Link to="/discover/this-week">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="fire" />
          </div>
          <p>This week</p>
        </div>
      </Link>

      <Link to="/discover/next-week">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="fa-forward-fast" />
          </div>
          <p>Next week</p>
        </div>
      </Link>

      <h2>Genres</h2>
      <Link to="/games/action">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>Action</p>
        </div>
      </Link>

      <Link to="/games/strategy">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>Strategy</p>
        </div>
      </Link>

      <Link to="/games/role-playing-games-rpg">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>RPG</p>
        </div>
      </Link>

      <h2>Top</h2>
      <Link to="/discover/best-of-the-year">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="trophy" />
          </div>
          <p>Best of the years</p>
        </div>
      </Link>

      <Link to="/discover/popular-in-2021">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="fa-chart-simple" />
          </div>
          <p>Popular in 2021</p>
        </div>
      </Link>

      <Link to="/discover/all-time-top">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="crown" />
          </div>
          <p>All time top 250</p>
        </div>
      </Link>

      <Link to="/games">
        <h2>All games</h2>
      </Link>
      <h2>Browse</h2>
      <Link to="/discover/platforms">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="gamepad" />
          </div>
          <p>Platforms</p>
        </div>
      </Link>

      <Link to="/discover/stores">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="store" />
          </div>
          <p>Stores</p>
        </div>
      </Link>

      <Link to="/collections/popular">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="fa-folder-plus" />
          </div>
          <p>Collections</p>
        </div>
      </Link>
      <h2>Platforms</h2>
      <Link to="/games/pc">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="desktop" />
          </div>
          <p>PC</p>
        </div>
      </Link>

      <Link to="/games/playstation4">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>PlayStation 4</p>
        </div>
      </Link>

      <Link to="/games/xbox-one">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>Xbox One</p>
        </div>
      </Link>

      <Link to="/games/nintendo-switch">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>Nintendo Switch</p>
        </div>
      </Link>

      <Link to="/games/ios">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>IOS</p>
        </div>
      </Link>

      <Link to="/games/android">
        <div className="litle-menu">
          <div className="icon-menu">
            <FontAwesomeIcon icon="star" />
          </div>
          <p>Android</p>
        </div>
      </Link>
    </section>
  );
};

export default Menu;
