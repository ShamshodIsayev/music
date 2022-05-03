import { useEffect, useState } from "react";
import { store } from "../../store";
import AlbumAbout from "./AlbumAbout";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(store.getState().datas);
  }, []);

  return (
    <section className="">
      {data[0] ? (
        <ul className="about__wrapper">
          {data.map((album) => {
            return <AlbumAbout data={album} key={album.id} />;
          })}
        </ul>
      ) : (
        ""
      )}
    </section>
  );
}

export default About;
