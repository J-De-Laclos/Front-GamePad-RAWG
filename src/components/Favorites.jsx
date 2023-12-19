import Menu from "./Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../assets/images/loader.gif";

const Favorites = ({ token }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://site--back-gamepad-rawg--f5vs5q45f4mj.code.run/favorites`,
          {
            token,
          }
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [token, id]);

  return isLoading ? (
    <div className="container">
      <img className="loader" src={loader} alt="loader" />
    </div>
  ) : (
    <section className="section-home">
      <Menu />
      <div className="home">
        <h1>Favorites</h1>
        <div className="all-games">
          {data.map((elem, index) => {
            return (
              <div key={index}>
                <div className="game">
                  <img src={elem.image} alt="visuel du favoris" />
                  <div className="title-game">
                    <h2>{elem.name}</h2>
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

export default Favorites;
