import { Link } from "react-router-dom";
import { store } from "../../store";

function Album({ data }) {
  const handleClickFigure = () => {
    store.dispatch({ type: "SET_CURRENT_ARTIST", payload: data });
  };

  return (
    <figure
      className="figure"
      onClick={handleClickFigure}
      onMouseEnter={handleClickFigure}
    >
      <Link to="/player" key={data.id}>
        <img
          alt="figure"
          className="figure__img"
          src={`https://music-uz.herokuapp.com/www.music-uz.herokuapp.com/${data.img}`}
        />
        <h4 className="figure__title">{data.name}</h4>
      </Link>
    </figure>
  );
}

export default Album;
