import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { store } from "../store";

function AboutArtist() {
  const [data, setData] = useState({});
  const [src, setSrc] = useState("");

  store.subscribe(() => {
    setData(store.getState().currentArtist);
  });

  useEffect(() => {
    setData(store.getState().currentArtist);
    if (data) setSrc(data.img);
  }, [data]);

  return (
    <div className="about_block">
      {data.name ? (
        <>
          <h2>{data.name}</h2>
          <img
            src={`https://music-uz.herokuapp.com/www.music-uz.herokuapp.com/${data.img}`}
            alt={data.name}
          />
          <p>{data.info}</p>
        </>
      ) : (
        ""
      )}{" "}
    </div>
  );
}

export default AboutArtist;
