import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import loader from "../assets/images/loader.gif";

const Game = ({ token }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [, setInFavorites] = useState(true);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--back-gamepad-rawg--f5vs5q45f4mj.code.run/game?id=${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [token, id]);

  const addFav = () => {
    if (token) {
      const favGame = async () => {
        try {
          const favorite = {
            name: data.name,
            id: data.id,
            image: data.background_image,
          };
          await axios.put("http://localhost:4000/favorite", {
            token,
            favorite,
          });
          setInFavorites(true);
        } catch (error) {
          console.log(error.response);
        }
      };
      favGame();
    } else {
      navigate("/user/login");
    }
  };

  return isLoading ? (
    <div className="container">
      <img className="loader" src={loader} alt="loader" />
    </div>
  ) : (
    <div>
      <section className="detail-game">
        <img src={data.background_image} alt="visuel du jeu" />
        <div>
          <img
            className="small-image"
            src={data.background_image_additional}
            alt="Second visuel du jeu"
          />
          <h2 className="title">{data.name}</h2>
          <h3>Release date</h3>
          <span className="release">{data.released}</span>
          <h3>Rating</h3>
          <span className="release">{data.rating}</span>
          <div>
            <button
              className="btnAddFavorite"
              onClick={() => {
                addFav();
                setInFavorites(true);
                alert("favoris ajouté");
              }}
            >
              Add Favorite
            </button>
          </div>
        </div>
      </section>
      <div className="container-description">
        <div className="about">
          <h3>About</h3>
          <p>{data.description_raw}</p>
        </div>
      </div>
      <section className="carousel">
        <p>Games like {data.name}</p>
        <Carousel
          className="carousel-game"
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
        >
          {data.stores.map((elem, index) => {
            return (
              <img
                src={elem.store.image_background}
                alt="visuel similaire au jeu"
              />
            );
          })}
        </Carousel>
      </section>
    </div>
  );
};

export default Game;
