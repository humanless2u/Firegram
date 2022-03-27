import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url, progress);

  return (
    <div className="progressbar" style={{ width: progress + " %" }}>
      {progress}
    </div>
  );
};
export default ProgressBar;
