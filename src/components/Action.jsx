import axios from "axios";
import Menu from "./Menu";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import loader from "../assets/images/loader.gif";

const Action = ({ search }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--back-gamepad-rawg--f5vs5q45f4mj.code.run/action?genres=${"action"}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <div className="container">
      <img className="loader" src={loader} alt="loader" />
    </div>
  ) : (
    <section className="section-home">
      <Menu />
      <div className="home">
        <h1>Action</h1>
        <div className="all-games">
          {data.results.map((game, index) => {
            return (
              <div key={index}>
                <div className="game">
                  <Link to={`/games/${game.id}`}>
                    <img src={game.background_image} alt="visuel du jeu" />
                  </Link>
                  <div className="title-game">
                    <div className="platforms-names">
                      {game.parent_platforms.map((platform, index) => {
                        return <p key={index}>{platform.platform.name}</p>;
                      })}
                    </div>
                    <h2>{game.name}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Action;
