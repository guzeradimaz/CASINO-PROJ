import React, {useEffect, useState} from "react";
import "./index.css";
import {Header} from "../../components/Header/Header";
import {ArrowBackLine} from "../../components/ArrowBackLine/ArrowBackLine";
import {useDispatch, useSelector} from "react-redux";
import {changeBalance} from '../../app/features/userSlice'
import useStorageUserChecker from "../../hooks/useStorageUserChecker";

export const SlotMachine = ({item1, item2, item3, item4}) => {
    const [spin, setSpin] = useState(false);
    const [ring1, setRing1] = useState();
    const [ring2, setRing2] = useState();
    const [ring3, setRing3] = useState();
    const [price, setPrice] = useState();
    const [input, setInput] = useState();
    const [realBet, setRealBet] = useState();
    const [jackpot, setJackpot] = useState(0);
    const dispatch = useDispatch()
    const balance = useSelector(state => state.user?.user?.balance)

    useStorageUserChecker()


    useEffect(() => {
        win();
    }, [ring3]);

    function row1() {
        if (!spin) {
            return (
                <>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                </>
            );
        } else if (spin && ring1 === undefined) {
            return (
                <>
                    <div className="ringMoving">{item1}</div>
                    <div className="ringMoving">{item2}</div>
                    <div className="ringMoving">{item3}</div>
                    <div className="ringMoving">{item4}</div>
                </>
            );
        } else if (ring1 >= 1 && ring1 <= 50) {
            return (
                <>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                </>
            );
        } else if (ring1 > 50 && ring1 <= 75) {
            return (
                <>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                </>
            );
        } else if (ring1 > 75 && ring1 <= 95) {
            return (
                <>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                </>
            );
        } else if (ring1 > 95 && ring1 <= 100) {
            return (
                <>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                </>
            );
        }
    }

    function row2() {
        if (!spin) {
            return (
                <>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                </>
            );
        } else if (spin && ring2 == undefined) {
            return (
                <>
                    <div className="ringMoving">{item1}</div>
                    <div className="ringMoving">{item2}</div>
                    <div className="ringMoving">{item3}</div>
                    <div className="ringMoving">{item4}</div>
                </>
            );
        } else if (ring2 >= 1 && ring2 <= 50) {
            return (
                <>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                </>
            );
        } else if (ring2 > 50 && ring2 <= 75) {
            return (
                <>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                </>
            );
        } else if (ring2 > 75 && ring2 <= 95) {
            return (
                <>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                </>
            );
        } else if (ring2 > 95 && ring2 <= 100) {
            return (
                <>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                </>
            );
        }
    }

    function row3() {
        if (!spin) {
            return (
                <>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                </>
            );
        } else if (spin && ring3 == undefined) {
            return (
                <>
                    <div className="ringMoving">{item1}</div>
                    <div className="ringMoving">{item2}</div>
                    <div className="ringMoving">{item3}</div>
                    <div className="ringMoving">🍋</div>
                    <div className="ringMoving">🍍</div>
                    <div className="ringMoving">{item4}</div>
                </>
            );
        } else if (ring3 >= 1 && ring3 <= 50) {
            return (
                <>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                </>
            );
        } else if (ring3 > 50 && ring3 <= 75) {
            return (
                <>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                </>
            );
        } else if (ring3 > 75 && ring3 <= 95) {
            return (
                <>
                    <div className="ringEnd">{item3}</div>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                </>
            );
        } else if (ring3 > 95 && ring3 <= 100) {
            return (
                <>
                    <div className="ringEnd">{item4}</div>
                    <div className="ringEnd">{item1}</div>
                    <div className="ringEnd">{item2}</div>
                    <div className="ringEnd">{item3}</div>
                </>
            );
        }
    }

    function win() {
        if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
            setPrice(1);
        } else if (
            ring1 > 50 &&
            ring1 <= 75 &&
            ring2 > 50 &&
            ring2 <= 75 &&
            ring3 > 50 &&
            ring3 <= 75 &&
            ring1 != undefined
        ) {
            setPrice(2);
        } else if (
            ring1 > 75 &&
            ring1 <= 95 &&
            ring2 > 75 &&
            ring2 <= 95 &&
            ring3 > 75 &&
            ring3 <= 95 &&
            ring1 != undefined
        ) {
            setPrice(3);
        } else if (
            ring1 > 95 &&
            ring1 <= 100 &&
            ring2 > 95 &&
            ring2 <= 100 &&
            ring3 > 95 &&
            ring3 <= 100 &&
            ring1 != undefined
        ) {
            setPrice(4);
        } else {
            setPrice(0);
        }
    }

    function rand() {
        setRing1(Math.floor(Math.random() * (100 - 1) + 1));
        setTimeout(function () {
            setRing2(Math.floor(Math.random() * (100 - 1) + 1));
        }, 1000);
        setTimeout(function () {
            setRing3(Math.floor(Math.random() * (100 - 1) + 1));
        }, 2000);
    }

    function play() {
        if (ring3 > 1 || !spin) {
            if (input <= balance && input >= 1) {
                setRealBet(input);
                setSpin(true);
                setRing1();
                setRing2();
                setRing3();
                dispatch(changeBalance(-input));
                setJackpot(jackpot + input / 2);
                setTimeout(function () {
                    rand();
                }, 2000);
            } else {
                setPrice(10);
            }
        }
    }

    function win() {
        if (ring1 <= 50 && ring2 <= 50 && ring3 <= 50 && ring1 != undefined) {
            setPrice(1);
            dispatch(changeBalance(balance * 15));
        } else if (
            ring1 > 50 &&
            ring1 <= 75 &&
            ring2 > 50 &&
            ring2 <= 75 &&
            ring3 > 50 &&
            ring3 <= 75 &&
            ring1 != undefined
        ) {
            setPrice(2);
            dispatch(changeBalance(balance * 20));
        } else if (
            ring1 > 75 &&
            ring1 <= 95 &&
            ring2 > 75 &&
            ring2 <= 95 &&
            ring3 > 75 &&
            ring3 <= 95 &&
            ring1 != undefined
        ) {
            setPrice(3);
            dispatch(changeBalance(balance * 25));
        } else if (
            ring1 > 95 &&
            ring1 <= 100 &&
            ring2 > 95 &&
            ring2 <= 100 &&
            ring3 > 95 &&
            ring3 <= 100 &&
            ring1 != undefined
        ) {
            setPrice(4);
            dispatch(changeBalance(jackpot));
            setJackpot(0);
        } else {
            setPrice(0);
        }
    }

    function premio() {
        if (price === 1 && ring3 > 1) {
            return (
                <p className="priceInd">{item2 + " X15 You've won " + realBet * 15 + "€!"}</p>
            );
        } else if (price === 2 && ring3 > 1) {
            return (
                <p className="priceInd">{item3 + " X20 You've won " + realBet * 20 + "€!"}</p>
            );
        } else if (price === 3 && ring3 > 1) {
            return (
                <p className="priceInd">{item4 + " X25 You've won " + realBet * 25 + "€!"}</p>
            );
        } else if (price === 4 && ring3 > 1) {
            return (
                <p className="priceInd">
                    {item1 + " Jackpot! You've won: " + jackpot + "€!"}
                </p>
            );
        } else if (price === 0 && ring3 > 1) {
            return <p className="priceInd">😧 ¡So close! But no luck...</p>;
        } else if (price === 10) {
            return (
                <p className="priceInd">
                    🥶 <span style={{color: `red`}}>Not enough funds</span>{" "}
                </p>
            );
        }
    }

    function numChecker(e) {
        const value = e.target.value;
        const regex = /^[0-9]+$/;
        if ((value.match(regex) && parseInt(value) >= 0) || value === "") {
            setInput(value);
        }
    }

    return (
        <div style={{backgroundColor: "rgb(17,17,17)", width: '100%'}} className="slot-machine">
            <Header/>
            <ArrowBackLine/>
            <div style={{width: '100vw', height: '100vh', backgroundColor: 'rgb(17,17,17)'}}>
                <div className="fullSlot">
                    <h1 className="price">{"Jackpot: " + jackpot + "€"}</h1>
                    <div className="slot">
                        <div className="row">{row1()}</div>
                        <div className="row">{row2()}</div>
                        <div className="row">{row3()}</div>
                    </div>
                    <h1 className="price">{premio()}</h1>
                    <div className="slotFoot">
                        <input
                            value={input}
                            type="number"
                            onChange={(e) => numChecker(e)}
                            className="betInput"
                            placeholder="0€"
                        ></input>
                        <button className="spinButton" onClick={() => play()}>
                            Spin
                        </button>
                    </div>
                    <h1 className="price">
                        {"Available cash: " + Math.round(balance * 100) / 100 + "€"}
                    </h1>
                    <button
                        onClick={() => dispatch(changeBalance(1000))}
                        className="buyMoreButton"
                    >
                        Add 1000 €
                    </button>
                </div>
            </div>
        </div>
    );
};
