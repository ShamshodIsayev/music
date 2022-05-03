import React, { useEffect, useState } from "react";
import discPart from "../../img/gramplast2.png";
import { store } from "../../store";

function Disc() {
  const [playStatus, setPlayStatus] = useState("");
  const [img, setImg] = useState("");

  store.subscribe(() => {
    const state = store.getState();
    setPlayStatus(state.playStatus);
    setImg(state.currentArtist.img);
  });

  return (
    <div className={playStatus === "play" ? "disc active" : "disc"}>
      <div className="disc_wrapper">
        <img
          alt="disc"
          className="disc_img"
          src={`https://music-uz.herokuapp.com/www.music-uz.herokuapp.com/${img}`}
        />
        <img alt="disc" className="disc_part" src={discPart} />
      </div>
    </div>
  );
}

export default Disc;
