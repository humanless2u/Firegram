import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const types = ["image/png", "image/jpeg"];

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
      </label>
      <div className="output">
        <span>{error && <div className="error">{error}</div>}</span>
        <span>{file && <div>{file.name}</div>}</span>
        <span>{file && <ProgressBar file={file} setFile={setFile} />}</span>
      </div>
    </form>
  );
};

export default UploadForm;
