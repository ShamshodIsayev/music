import { useEffect, useState } from "react";
import { store } from "../../store";

function ArtistPic() {
  const [pic, setPic] = useState("");

  useEffect(() => {
    setPic(store.getState().currentArtist.img);
  }, [store]);

  return (
    <img
      alt={pic}
      className="artist_pic_img"
      src={`https://music-uz.herokuapp.com/www.music-uz.herokuapp.com/${pic}`}
    />
  );
}

export default ArtistPic;
