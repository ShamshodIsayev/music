import React, { useEffect, useRef, useState } from "react";
import ArtistPic from "../components/song/ArtistPic";
import Disc from "../components/song/Disc";
import Song from "../components/song/Song";
import SongPlayer from "../components/song/SongPlayer";
import { store } from "../store";
import "../styles/song.css";

function SongPages() {
  const sound = useRef(null);
  const [soundTime, setSoundTime] = useState({});

  store.subscribe(() => {
    if (sound.current) {
      const song =
        "https://music-uz.herokuapp.com/www.music-uz.herokuapp.com/audio/" +
        store.getState().currentSong.src;
      if (song != "undefined") sound.current.src = song;

      const status = store.getState().playStatus;
      if (status === "play") sound.current.play();
    }
  });

  const handleTimeUpdate = (e) => {
    if (sound) {
      const time = sound.current.currentTime / sound.current.duration;

      setSoundTime({
        time,
        duration: sound.current.duration,
        current: sound.current.currentTime,
      });
    }
  };

  useEffect(() => {
    sound.current.addEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <div>
      <audio ref={sound}></audio>
      <Song />
      <SongPlayer soundTime={soundTime} sound={sound.current} />
      <Disc />
    </div>
  );
}

export default SongPages;
