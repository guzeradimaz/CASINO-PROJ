import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [{ option: "0" }, { option: "1" }, { option: "2" }];

export const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(17,17,17)",
        paddingTop: 60,
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
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button onClick={handleSpinClick}>SPIN</button>
      </div>
    </div>
  );
};
