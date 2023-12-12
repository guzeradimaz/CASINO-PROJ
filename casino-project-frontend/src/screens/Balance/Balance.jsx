import React, {useState} from "react";
import "./Balance.css";
import {ArrowBackLine} from "../../components/ArrowBackLine/ArrowBackLine";
import {useDispatch} from "react-redux";
import {changeBalance} from "../../app/features/userSlice";
import {useNavigate} from "react-router-dom";

export const Balance = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [cardNumber, setCardNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState("");
    const [expiryYear, setExpiryYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [amount, setAmount] = useState(0);


    const onTopUp = () => {
        validate()
        dispatch(changeBalance({income: amount}))
        navigate('/home')
    }

    const validate = () => {

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
                <input className="card-number" type="number" maxLength="19"
                       placeholder="XXXX XXXX XXXX XXXX"
                       onChange={(e) => setCardNumber(e.target.value)}/>
                <label className="caption">Дата истечения</label>
                <input className="expiration" placeholder="mm / yy"/>
                <label className="caption">CVC</label>
                <input className="cvc" placeholder="XXX" type="number"/>
                <label className="caption">Количество</label>
                <input className="amount" placeholder="Введите количество для пополнения" type="number"
                       onChange={(e) => setAmount(+e.target.value)}/>
            </div>
            <button className="top-up-btn" onClick={onTopUp}>Пополнить</button>
        </div>
    );
};
