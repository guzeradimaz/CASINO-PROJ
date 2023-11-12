import React from "react";

export const BetInput = ({
  betCoefficient,
  onIncrease,
  onDecrease,
  balance,
}) => {
  const handleIncrease = () => {
    onIncrease(-10);
  };

  const handleDecrease = () => {
    onDecrease(10);
  };

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
          onClick={handleDecrease}
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
          Bet: {betCoefficient}
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
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </div>
  );
};
