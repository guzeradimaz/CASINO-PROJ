import React from "react";

export const BetInput = ({
  currentBet,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div style={{ marginTop: 30, marginBottom: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            borderRadius: 11,
            border: "none",
            fontSize: 40,
            color: "#fff",
            backgroundColor: "black",
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={onDecrease}
        >
          -
        </button>
        <span
          style={{
            fontSize: 18,
            color: "#fff",
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          Bet: {currentBet}
        </span>
        <button
          style={{
            borderRadius: 11,
            border: "none",
            fontSize: 40,
            color: "#fff",
            backgroundColor: "black",
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
          onClick={onIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};
