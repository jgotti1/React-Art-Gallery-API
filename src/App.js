import { useState, useEffect } from "react";
import "./App.css";
import ButtonBar from "./ButtonBar";
import Gallery from "./Gallery";

function App() {
  let [artId, setArtId] = useState(12720);
  let [data, setData] = useState({});

  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value));
  };

  useEffect(() => {
    document.title = "Welcome to Artworld";
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then((response) => response.json())

      .then((resData) => {
        if (!resData.primaryImage) {
          setArtId(artId + 1);
        } else {
          setData(resData);
        }
      });
  }, [artId]);

  return (
    <div className="App">
      <Gallery className="image" objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
      <ButtonBar handleIterate={handleIterate} />
      <hr />
      <h5>Image ID:{artId}</h5>
    </div>
  );
}

export default App;
