import React, { useState } from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import "../src/index.css";
import Modal from "./comps/Modal";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
    </div>
  );
}

export default App;
