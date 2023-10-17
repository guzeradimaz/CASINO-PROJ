import React, { useEffect, useState } from "react";
import "./index.css";

export const SlotMachine = () => {
  const [symbols, setSymbols] = useState(["🍒", "🍇", "🍊", "🍋", "🍎"]);
  const [spin, setSpin] = useState(false);
  const [result, setResult] = useState(Array(3).fill(null));
  const [currentIndex, setCurrentIndex] = useState([0, 1, 2]);

  const spinReels = () => {
    setSpin(true);
    setResult(Array(3).fill(null));

    setTimeout(() => {
      setCurrentIndex(
        currentIndex.map((index) => (index + 1) % symbols.length)
      );
      setSpin(false);
    }, 1000);
  };

  useEffect(() => {
    spinReels();
  }, []);

  return (
    <div className="slot-machine">
      <div className="reels">
        {result.map((_, index) => (
          <div key={index} className={`reel ${spin ? "spin" : ""}`}>
            {symbols[(currentIndex[index] + 2) % symbols.length]}
            {symbols[(currentIndex[index] + 1) % symbols.length]}
            {symbols[(currentIndex[index] + 0) % symbols.length]}
          </div>
        ))}
      </div>
      <button onClick={spinReels} disabled={spin}>
        {spin ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
};
