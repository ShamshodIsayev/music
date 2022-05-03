import { useEffect, useState } from "react";
import "./App.css";
import Lists from "./pages/Lists";
import SongPage from "./pages/SongPage";
import { useDispatch } from "react-redux";
import Home from "./pages/Home";

function App() {
  const [data, setData] = useState([]);
  const [src, setSrc] = useState(`./audio/`);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* <Lists /> */}
      {/* <SongPage /> */}
      <Home />
    </div>
  );
}

export default App;
