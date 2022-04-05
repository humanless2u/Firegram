import React from "react";

const Modal = ({ selectedImg, setSelectedImg }) => {
  if (selectedImg) {
    return (
      <div className="backdrop" onClick={() => setSelectedImg(null)}>
        <img src={selectedImg} alt="enlarged pic" />
      </div>
    );
  }
  return <div className="backdrop"></div>;
};

export default Modal;
