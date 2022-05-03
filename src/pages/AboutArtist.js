import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { store } from "../store";

function AboutArtist() {
  const [data, setData] = useState({});
  const [src, setSrc] = useState("");

  store.subscribe(() => {
    setData(store.getState().currentArtist);
  });
  console.log(useLocation());

  useEffect(() => {
    setData(store.getState().currentArtist);
    if (data) setSrc(data.img);
  }, [data]);

  return (
    <div className="about_block">
      {data.name ? (
        <>
          <h2>{data.name}</h2>
          {/* <img src={data.img} alt="ASDAS" /> */}
          <img src={`http://localhost:3000/${data.img}`} alt="ASDAS" />
          <p>{data.info}</p>
        </>
      ) : (
        ""
      )}{" "}
    </div>
  );
}

export default AboutArtist;
