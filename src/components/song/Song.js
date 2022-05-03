import React, { useEffect, useState } from "react";
import { store } from "../../store";
import ArtistPic from "./ArtistPic";
import SongList from "./SongList";

function Song() {
  const [currentArtist, setCurrentArtist] = useState({});

  store.subscribe(() => {
    if (store.getState().currentArtist.name !== currentArtist.name)
      setCurrentArtist(store.getState().currentArtist);
  });

  useEffect(() => {
    setCurrentArtist(store.getState().currentArtist);
  }, [store]);

  return (
    <section className="song">
      <div className="song__img2"></div>
      <div className="song__wrapper">
          <span className="song__wrap_title"> {currentArtist.name}</span>
        <ul>
          {currentArtist.name
            ? currentArtist.songs.map((song) => {
                return (
                  <SongList
                    song={song}
                    key={+(Math.random() * 684534).toFixed()}
                  />
                );
              })
            : ""}
        </ul>
      </div>
      <div className="song__img2">
        <ArtistPic />
      </div>
    </section>
  );
}

export default Song;
