import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./index.css";

const data = [
  { option: "0", style: { textColor: "#fff", backgroundColor: "#016D29" } },
  { option: "32", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "15", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "19", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "4", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "21", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "2", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "25", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "17", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "34", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "6", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "27", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "13", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "36", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "11", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "30", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "8", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "23", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "10", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "5", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "24", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "16", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "33", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "1", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "20", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "14", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "31", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "9", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "22", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "18", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "29", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "7", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "28", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "12", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "35", style: { textColor: "#fff", backgroundColor: "black" } },
  { option: "3", style: { textColor: "#fff", backgroundColor: "#E0080B" } },
  { option: "26", style: { textColor: "#fff", backgroundColor: "black" } },
];

const outerBorderColor = "#F3C620";
const outerBorderWidth = 1;
const innerBorderColor = "#000";
const innerBorderWidth = 20;
const innerRadius = 0;
const radiusLineColor = "#F3C620";
const radiusLineWidth = 1;
const fontSize = 14;
const fontStyle = "normal";
const textDistance = 80;
const spinDuration = 1.0;

export const Roulette = () => {
  
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prizes, setPrizes] = useState([19,0,6,8,14,9,6]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      addNewPrizeToStory(data[newPrizeNumber].option);
      setMustSpin(true);
    }
  };

  const addNewPrizeToStory = (newPrizeNumber) => {
    // setTimeout(() => {
    setPrizes((prev) => [newPrizeNumber, ...prev]);
    // }, 4000);
  };

  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "rgb(17,17,17)",
        paddingTop: 60,
        paddingBottom: 100,
      }}
    >
      <div
        style={{
          width: "100%",
          height: 100,
          boxShadow: "0 0 5px #552b8c",
          alignItems: "center",
          display: "flex",
          paddingLeft: 30,
          paddingRight: 30,
          justifyContent:'space-between'
        }}
      >
        <p
          style={{
            fontSize: 42,
            color: "#552b8c",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 1,
          }}
        >
          Roulette
        </p>
        <a href="/" style={{color:'#fff'}}>Home</a>
      </div>
      <div
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          height: 80,
          display: "flex",
          boxShadow: "0 0 5px #552b8c",
          overflowX: "scroll",
          transition: "all 0.3s ease",
        }}
      >
        {prizes.map((i) => (
          <p
            key={`id-value-${i + Math.random()}`}
            style={{
              color: "gold",
              minWidth: 60,
              fontSize: 24,
              marginLeft: 30,
              transition: "all 0.3s ease",
              fontWeight:'bold'
            }}
          >
            {i}
          </p>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: 60,
        }}
      >
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          fontSize={fontSize}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={spinDuration}
          startingOptionIndex={2}
          perpendicularText
          textDistance={textDistance}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button className="btn-roulette-spin" onClick={handleSpinClick}>
          SPIN
        </button>
      </div>
    </div>
  );
};
