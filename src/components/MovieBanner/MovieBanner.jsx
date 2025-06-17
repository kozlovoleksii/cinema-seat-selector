import { useNavigate } from "react-router-dom";
import "./MovieBanner.css";

export const MovieBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/seats");
  };

  return (
    <section className="movie-banner">
      <div className="movie-banner__content">
        <h1 className="movie-banner__title">Як приборкати дракона</h1>
        <p className="movie-banner__description">
          Молодий та кмітливий вікінг Гикавка замість того, аби винищувати
          небезпечних драконів, знаходить спосіб дружити з ними.
        </p>
        <button className="movie-banner__button" onClick={handleClick}>
          Обрати сеанс
        </button>
        <button className="movie-banner__button--fixed" onClick={handleClick}>
          Обрати сеанс
        </button>
      </div>
      <div className="movie-banner__info">
        <p className="movie-banner__details">
          8.1 IMDB • 125 хв. • Фантастично-пригодницький екшн • від 0 років •
          2025
        </p>
        <p className="movie-banner__technology">
          2D • 3D • RE'LUX • 4DX • IMAX
        </p>
      </div>
    </section>
  );
};
