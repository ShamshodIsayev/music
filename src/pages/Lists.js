import React, { useEffect, useState } from "react";
import "../styles/lists.css";
import Album from "../components/lists/Album";
import { store } from "../store";
function Lists() {
  const [data, setData] = useState([]);

  store.subscribe(() => {
    setData(store.getState().datas);
  });

  useEffect(() => {
    setData(store.getState().datas);
  }, []);

  return (
    <section className="albums">
      <h2>Lists</h2>
      {data[0] ? (
        <div className="album__wrapper">
          {data.map((album) => {
            return <Album data={album} key={album.id} />;
          })}
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Lists;
