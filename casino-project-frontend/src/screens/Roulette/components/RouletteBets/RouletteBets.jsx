import React from "react";

const Bet = ({ item }) => {
  return (
    <div
      style={{
        border: "1px solid red",
        width: 100,
        height: 100,
        alignItems: "center",
        display:'flex',
        justifyContent: "center",
        cursor:'pointer'
      }}
    >
      <p style={{ fontSize: 32, color: "#fff" }}>{item.title}</p>
    </div>
  );
};
export const RouletteBets = ({ bets }) => {
  return (
    <div
      style={{
        border: "1px solid red",
        marginTop: 50,
        width: "80%",
        height: 430,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {bets.map((i) => {
        return <Bet item={i} />;
      })}
    </div>
  );
};
