import React, {useRef, useState} from "react";
import "./Balance.css";
import {ArrowBackLine} from "../../components/ArrowBackLine/ArrowBackLine";

export const Balance = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState("");
    const [expiryYear, setExpiryYear] = useState("");
    const [cvc, setCvc] = useState("");
    const amount = useRef()


    const onTopUp = () => {
        console.log(cardNumber)
    }


    return (
        <div className="balance-wrapper">
            <ArrowBackLine/>
            <div className="caption">Пополните баланс с помощью карты</div>
            <img
                className={"credit-cards"}
                src={
                    "https://www.zenithimmigration.ca/wp-content/uploads/2022/06/visa-mastercard-logo.png"
                }
                alt={"credit cards"}
            />
            <div className="card-info-container">
                <label className="caption">Номер карты</label>
                <input className="card-number" type="number" inputMode="numeric" pattern="[0-9\s]{13,19}" maxLength="19"
                       placeholder="XXXX XXXX XXXX XXXX"
                       onChange={(e) => setCardNumber(prev => e.target.value)}/>
                <label className="caption">Дата истечения срока</label>
                <input className="expiration" placeholder="mm / yy"/>
                <label className="caption">CVC</label>
                <input className="cvc" placeholder="XXX" type="number"/>
                <label className="caption">Количество</label>
                <input ref={amount} className="amount" placeholder="Введите количество для пополнения" type="number"/>
            </div>
            <button className="top-up-btn" onClick={onTopUp}>Пополнить</button>
        </div>
    );
};
