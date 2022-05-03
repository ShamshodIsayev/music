import React from "react";
import { useDispatch } from "react-redux";

function SongList({ song }) {
  const dispatch = useDispatch();

  const handleClickTitle = () => {
    if (song) {
      dispatch({ type: "SET_CURRENT_SONG", payload: song });
      dispatch({ type: 'PLAY' });
    }
  };

  return (
    <li onClick={handleClickTitle}>
      <h4>{song.title}</h4>
    </li>
  );
}

export default SongList;
