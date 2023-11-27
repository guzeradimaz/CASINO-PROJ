import React from "react";
import "./index.css";

export const ModalWin = ({ modalVisible, setModalVisible, isWin }) => {
  const handleClose = () => setModalVisible(!modalVisible);
  if (modalVisible)
    return (
      <div className="modalWrapper">
        <div className="modalView">
          {isWin.color || isWin.number ? (
            <h1>Congratulations, you win!</h1>
          ) : (
            <h2>Try again and win more!</h2>
          )}
          <button onClick={handleClose}>Okay</button>
        </div>
      </div>
    );
};
