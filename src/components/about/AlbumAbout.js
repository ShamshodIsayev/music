import React from "react";
import { Link } from "react-router-dom";
import { store } from "../../store";

function AlbumAbout({ data }) {
  const handleClickFigure = () => {
    store.dispatch({ type: "SET_CURRENT_ARTIST", payload: data });
  };

  return (
    <>
      <li
        className="about_figure"
        onClick={handleClickFigure}
        //   onMouseEnter={handleClickFigure}
      >
        <Link to={`./${data.name}`}>
          <h4 className="figure__title">{data.name}</h4>
        </Link>
      </li>
    </>
  );
}

export default AlbumAbout;
