import React from "react";
import './index.css'

const casinos = [
  {
    id: "fadfgsg24g24g",
    img:
      "https://extrabetamerica.imgix.net/1aacb593ba314efb9464f00c74e616c5.jpg?fit=crop&ar=16:9",
    title: "Roulette",
    text:
      "Roulette, (from French: “small wheel”), gambling game in which players bet on which red or black numbered compartment of a revolving wheel a small ball (spun in the opposite direction) will come to rest within. Bets are placed on a table marked to correspond with the compartments of the wheel. It is played in casinos worldwide. Roulette is a banking game, and all bets are placed against the bank—that is, the house, or the proprietor of the game. As a big-time betting game, it has had its popularity superseded in the United States and the Caribbean islands by others, notably craps, blackjack, and poker.",
  },
  {
    id: "fadfgsg2bfsdg23gdfbdfb4g24g",
    img:
      "https://media.npr.org/assets/img/2022/07/29/ap21188557258852_wide-dc06630f1c1a82ed0280cdf5b9de3f50f5f4f52a.jpg",
    title: "Slot machine",
    text:
      "A slot machine, fruit machine (British English), poker machine or pokies (Australian English and New Zealand English) is a gambling machine that creates a game of chance for its customers. Slot machines are also known pejoratively as one-armed bandits, alluding to the large mechanical levers affixed to the sides of early mechanical machines, and to the games' ability to empty players' pockets and wallets as thieves would",
  },
  {
    id: "fadfgsg2bvssd0vsdvs09dfbdfb4g24g",
    img:
      "https://belarushockey.com/files/news/1777.jpg",
    title: "Aviator",
    text:
      "An aviator is simply an aircraft pilot responsible for bringing an aircraft from one point to another safely and on time. Usually, the term aviator applies to small aircraft pilots, as those who fly commercial planes are generally referred to as pilots.",
  },
];
export const Overview = () => {
  return (
    <div
      style={{
        width: "100%",
        margin: "100px 0",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        backgroundColor:'rgb(17,17,17)'
      }}
    >
      {casinos.map((i) => (
        <div
          className="casino-desc-item"
          key={i.id}
          style={{
            width: "60%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginTop: 100
          }}
        >
          <img
            src={i.img}
            alt={i.id}
            style={{
              maxWidth: 300,
              borderRadius: 12,
              boxShadow: "0 0 5px #552b8c",
            }}
          />
          <div style={{ maxWidth: "70%" }}>
            <h1
              style={{
                color: "#fff",
                fontSize: 24,
                marginBottom: 20,
                textTransform: "uppercase",
                fontWeight: "500",
              }}
            >
              {i.title}
            </h1>
            <p style={{ color: "#fff", fontSize: 18, fontWeight: "300" }}>
              {i.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
