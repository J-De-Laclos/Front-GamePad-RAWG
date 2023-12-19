import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// import des routes
import Home from "./components/Home";
import Game from "./components/Game";
import Favorites from "./components/Favorites";
import Reviews from "./components/Reviews";
import Header from "./components/Header";
import LastThirtyDays from "./components/LastThirtyDays";
import ThisWeek from "./components/ThisWeek";
import NextWeek from "./components/NextWeek";
import BestOfTheYears from "./components/BestOfTheYears";
import Popular from "./components/Popular";
import AllTimeTop from "./components/AllTimeTop";
import AllGames from "./components/AllGames";
import Platforms from "./components/Platforms";
import Stores from "./components/Stores";
import Collections from "./components/Collections";
import Pc from "./components/Pc";
import Playstation from "./components/Playstation";
import XboxOne from "./components/XboxOne";
import Nintendo from "./components/Nintendo";
import IOS from "./components/IOS";
import Android from "./components/Android";
import Action from "./components/Action";
import Strategy from "./components/Strategy";
import RPG from "./components/RPG";
import Signup from "./components/Signup";
import Login from "./components/Login";

// import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faStar,
  faFire,
  faForwardFast,
  faTrophy,
  faChartSimple,
  faCrown,
  faGamepad,
  faStore,
  faFolderPlus,
  faDesktop,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faBars,
  faStar,
  faFire,
  faForwardFast,
  faTrophy,
  faChartSimple,
  faCrown,
  faGamepad,
  faStore,
  faFolderPlus,
  faDesktop,
  faCircleXmark
);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const [search, setSearch] = useState("");
  const [genres, setGenres] = useState("");

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header
        search={search}
        setSearch={setSearch}
        handleToken={handleToken}
        token={token}
      />
      <Routes>
        <Route
          path="/"
          element={<Home search={search} setSearch={setSearch} />}
        />
        <Route
          path="/user/signup"
          element={<Signup handleToken={handleToken} />}
        />
        <Route
          path="/user/login"
          element={<Login handleToken={handleToken} />}
        />
        <Route path="/games/:id" element={<Game token={token} />} />
        <Route path="/favorites" element={<Favorites token={token} />} />
        <Route path="/reviews/popular" element={<Reviews />} />
        <Route path="/discover/last-30-days" element={<LastThirtyDays />} />
        <Route path="/discover/this-week" element={<ThisWeek />} />
        <Route path="/discover/next-week" element={<NextWeek />} />
        <Route path="/discover/best-of-the-year" element={<BestOfTheYears />} />
        <Route path="/discover/popular-in-2021" element={<Popular />} />
        <Route path="/discover/all-time-top" element={<AllTimeTop />} />
        <Route path="/games" element={<AllGames />} />
        <Route path="/discover/platforms" element={<Platforms />} />
        <Route path="/discover/stores" element={<Stores />} />
        <Route path="/collections/popular" element={<Collections />} />
        <Route path="/games/pc" element={<Pc />} />
        <Route path="/games/playstation4" element={<Playstation />} />
        <Route path="/games/xbox-one" element={<XboxOne />} />
        <Route path="/games/nintendo-switch" element={<Nintendo />} />
        <Route path="/games/ios" element={<IOS />} />
        <Route path="/games/android" element={<Android />} />
        <Route
          path="/games/action"
          element={<Action genres={genres} setGenres={setGenres} />}
        />
        <Route
          path="/games/strategy"
          element={<Strategy genres={genres} setGenres={setGenres} />}
        />
        <Route
          path="/games/role-playing-games-rpg"
          element={<RPG genres={genres} setGenres={setGenres} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
