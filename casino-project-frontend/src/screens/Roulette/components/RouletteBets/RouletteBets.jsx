import React from "react";

const Bet = ({ item, setCurrentBet, currentBet }) => {
  return (
    <button
      onClick={() => setCurrentBet(item.title)}
      style={{
        border: "1px solid #fff",
        width: 90,
        height: 90,
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        backgroundColor: currentBet === item.title ? "orange" : item.color,
        borderRadius: 11,
        margin: 2,
      }}
    >
      <p style={{ fontSize: 32, color: "#fff" }}>{item.title}</p>
    </button>
  );
};
export const RouletteBets = ({ bets, setCurrentBet, currentBet }) => {
  return (
    <div
      style={{
        marginTop: 50,
        width: "80%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {bets.map((i) => {
        return (
          <Bet item={i} setCurrentBet={setCurrentBet} currentBet={currentBet} />
        );
      })}
    </div>
  );
};
