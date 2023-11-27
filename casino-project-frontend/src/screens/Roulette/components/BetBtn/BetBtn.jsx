import React from "react";

export const BetBtn = ({ color, onPress, text, currentBetColor, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="betBtn"
      onClick={onPress}
      style={{
        backgroundColor: color === currentBetColor ? "green" : color,
        color: "#fff",
        fontSize: 18,
        textTransform: "uppercase",
        letterSpacing: 1,
        border: "none",
        borderRadius: 11,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 10,
      }}
    >
      {text}
    </button>
  );
};
