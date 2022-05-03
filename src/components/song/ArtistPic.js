import { useEffect, useState } from "react";
import { store } from "../../store";

function ArtistPic() {
  const [pic, setPic] = useState("");

  useEffect(() => {
    setPic(store.getState().currentArtist.img);
  }, [store]);

  return <img className="artist_pic_img" src={pic} />;
}

export default ArtistPic;
