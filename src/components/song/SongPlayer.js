import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faForwardFast,
  faBackwardFast,
  faPause,
  faVolumeUp,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import { store } from "../../store";
import { getIndexFromArr } from "./functions";

function SongPlayer({ soundTime, sound }) {
  const [audioStarted, setAudioStarted] = useState(false);
  const [audioVolume, setAudioVolume] = useState(true);
  const [playStatus, setPlayStatus] = useState(false);
  const [title, setTitle] = useState("Loading");
  const audioRange = useRef(null);
  const playerTime = useRef(null);
  const volumeInput = useRef(null);

  store.subscribe(() => {
    const state = store.getState();
    if (state.playStatus === "play") setPlayStatus(true);
    if (state.currentSong) setTitle(state.currentSong.title);
    if (state.currentSong.title) setAudioStarted(true);
  });

  useEffect(() => {
    if (audioRange.current && soundTime.time) {
      // audio input range
      audioRange.current.max = soundTime.duration;
      audioRange.current.value = soundTime.current;

      audioRange.current.addEventListener("change", (e) => {
        sound.currentTime = e.target.value;
      });

      // audio player time
      const curPlayTime = (sound.currentTime / 60).toFixed(2);
      const curPlayDuration = (sound.duration / 60).toFixed(2);
      playerTime.current.textContent = `${curPlayTime} / ${curPlayDuration}
      `;
    }
  }, [soundTime.time]);

  const handleClickPlay = () => {
    if (playStatus) {
      setPlayStatus(false);
      store.dispatch({ type: "PAUSE" });
    } else {
      setPlayStatus(true);
      store.dispatch({ type: "PLAY" });
    }
  };

  const handleClickNext = () => {
    const state = store.getState();
    const currentSong = state.currentSong;

    const index = getIndexFromArr(
      state.currentArtist.songs,
      currentSong,
      "next"
    );
    if (index == "last")
      store.dispatch({
        type: "SET_CURRENT_SONG",
        payload: state.currentArtist.songs[0],
      });
    else {
      const nextSong = state.currentArtist.songs[index + 1];
      store.dispatch({ type: "SET_CURRENT_SONG", payload: nextSong });
    }
  };

  const handleClickPrev = () => {
    const state = store.getState();
    const currentSong = state.currentSong;

    const index = getIndexFromArr(
      state.currentArtist.songs,
      currentSong,
      "prev"
    );

    if (index === "prev")
      store.dispatch({
        type: "SET_CURRENT_SONG",
        payload:
          state.currentArtist.songs[state.currentArtist.songs.length - 1],
      });
    else {
      const nextSong = state.currentArtist.songs[index - 1];
      store.dispatch({ type: "SET_CURRENT_SONG", payload: nextSong });
    }
  };

  const handleChangeVol = (e) => {
    sound.volume = e.target.value;
    if (e.target.value < 0.1) setAudioVolume(false);
    else setAudioVolume(true);
  };

  const handleClickVol = () => {
    if (audioVolume) {
      setAudioVolume(false);
      sound.volume = 0;
      volumeInput.current.value = 0;
    } else {
      setAudioVolume(true);
      sound.volume = 1;
      volumeInput.current.value = 1;
    }
  };

  return (
    <div className={audioStarted ? "player active" : "player"}>
      <h2 className="player_title">{title}</h2>
      <div className="player_controls">
        <FontAwesomeIcon
          className="player_btn"
          onClick={handleClickPrev}
          icon={faBackwardFast}
        />
        <FontAwesomeIcon
          className="player_btn"
          onClick={handleClickPlay}
          icon={playStatus ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="player_btn"
          onClick={handleClickNext}
          icon={faForwardFast}
        />
        <span className="player_time" ref={playerTime}></span>
        <div className="player_vol">
          <FontAwesomeIcon
            className="player_btn"
            onClick={handleClickVol}
            icon={audioVolume ? faVolumeUp : faVolumeMute}
          />
          <input
            type="range"
            onChange={handleChangeVol}
            step={0.1}
            min="0"
            max="1"
            ref={volumeInput}
          />
        </div>
      </div>
      <input
        className="player_range"
        type="range"
        step="1"
        min="0"
        max="1"
        ref={audioRange}
      />
    </div>
  );
}

export default SongPlayer;
