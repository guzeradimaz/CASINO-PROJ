import React, { useEffect, useState } from "react";
import { Wheel } from "react-custom-roulette";
import "./index.css";
import { RouletteBets } from "./components/RouletteBets/RouletteBets";
import { Header } from "../../components/Header/Header";
import { BetBtn } from "./components/BetBtn/BetBtn";
import { BetInput } from "./components/BetInput/BetInput";
import { ArrowBackLine } from "../../components/ArrowBackLine/ArrowBackLine";
import { useDispatch, useSelector } from "react-redux";
import { changeBalance } from "../../app/features/userSlice";
import { ModalWin } from "./components/ModalWin/ModalWin";

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

const rouletteBets = [
  { title: "1", coef: 36, color: "#E0080B" },
  { title: "2", coef: 36, color: "black" },
  { title: "3", coef: 36, color: "#E0080B" },
  { title: "4", coef: 36, color: "black" },
  { title: "5", coef: 36, color: "#E0080B" },
  { title: "6", coef: 36, color: "black" },
  { title: "7", coef: 36, color: "#E0080B" },
  { title: "8", coef: 36, color: "black" },
  { title: "9", coef: 36, color: "#E0080B" },
  { title: "10", coef: 36, color: "black" },
  { title: "11", coef: 36, color: "#E0080B" },
  { title: "12", coef: 36, color: "black" },
  { title: "13", coef: 36, color: "#E0080B" },
  { title: "14", coef: 36, color: "black" },
  { title: "15", coef: 36, color: "#E0080B" },
  { title: "16", coef: 36, color: "black" },
  { title: "17", coef: 36, color: "#E0080B" },
  { title: "18", coef: 36, color: "black" },
  { title: "19", coef: 36, color: "#E0080B" },
  { title: "20", coef: 36, color: "black" },
  { title: "21", coef: 36, color: "#E0080B" },
  { title: "22", coef: 36, color: "black" },
  { title: "23", coef: 36, color: "#E0080B" },
  { title: "24", coef: 36, color: "black" },
  { title: "25", coef: 36, color: "#E0080B" },
  { title: "26", coef: 36, color: "black" },
  { title: "27", coef: 36, color: "#E0080B" },
  { title: "28", coef: 36, color: "black" },
  { title: "29", coef: 36, color: "#E0080B" },
  { title: "30", coef: 36, color: "black" },
  { title: "31", coef: 36, color: "#E0080B" },
  { title: "32", coef: 36, color: "black" },
  { title: "33", coef: 36, color: "#E0080B" },
  { title: "34", coef: 36, color: "black" },
  { title: "35", coef: 36, color: "#E0080B" },
  { title: "36", coef: 36, color: "black" },
  { title: "0", coef: 36, color: "green" },
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
  const [prizes, setPrizes] = useState([19, 0, 6, 8, 14, 9, 6]);
  const [currentBet, setCurrentBet] = useState(null);
  const [currentBetColor, setCurrentBetColor] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.user?.user?.balance);

  const [disabled, setDisabled] = useState(false);

  const [bet, setBet] = useState(0);
  const [isWin, setIsWin] = useState({ number: false, color: false });

  useEffect(() => {
    setBet((balance / 10).toFixed(0));
  }, [balance]);

  const handleSpinClick = () => {
    setDisabled(true);
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      findPrize(newPrizeNumber);
      addNewPrizeToStory(data[newPrizeNumber].option);
      setMustSpin(true);
    }
  };

  const addNewPrizeToStory = (newPrizeNumber) => {
    setPrizes((prev) => [newPrizeNumber, ...prev]);
  };

  const handleIncrease = () => {
    setBet((prev) => +prev + 10);
  };

  const handleDecrease = () => {
    setBet((prev) => +prev - 10);
  };

  const findPrize = (number) => {
    const item = data.filter((i) => i.option === number.toString());
    const isWinColor = currentBetColor === item[0].style.backgroundColor;
    const isWinNumber = currentBet == item[0].option;
    setTimeout(() => {
      setIsWin({ number: isWinNumber, color: isWinColor });
      setModalVisible(!modalVisible);
      if (!isWinColor && !isWinNumber) {
        dispatch(changeBalance(-currentBet));
      } else if (isWinColor) {
        const num = currentBet * 2;
        dispatch(changeBalance(+num));
      } else if (isWinNumber) {
        const num = currentBet * 36;
        dispatch(changeBalance(+num));
      }
      setDisabled(false);
    }, 4000);
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
      <ModalWin
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        isWin={isWin}
      />
      <Header />
      <ArrowBackLine />
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
              fontWeight: "bold",
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
        <button
          disabled={disabled}
          className="btn-roulette-spin"
          onClick={handleSpinClick}
        >
          SPIN
        </button>
        <BetInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          currentBet={bet}
        />
        <div style={{ flexDirection: "row", alignItems: "center" }}>
          <BetBtn
            disabled={disabled}
            color={"#E0080B"}
            text={"red"}
            currentBetColor={currentBetColor}
            onPress={() => {
              setCurrentBetColor("#E0080B");
            }}
          />
          <BetBtn
            disabled={disabled}
            color={"black"}
            text={"black"}
            currentBetColor={currentBetColor}
            onPress={() => {
              setCurrentBetColor("black");
            }}
          />
          <BetBtn
            disabled={disabled}
            color={"orange"}
            text={"clear"}
            currentBetColor={"red"}
            onPress={() => {
              setCurrentBetColor(null);
              setCurrentBet(0);
            }}
          />
        </div>
        <RouletteBets
          disabled={disabled}
          bets={rouletteBets}
          setCurrentBet={setCurrentBet}
          currentBet={currentBet}
        />
      </div>
    </div>
  );
};
