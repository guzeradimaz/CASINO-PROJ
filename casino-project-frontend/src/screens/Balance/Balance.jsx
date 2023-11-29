import React, { useState } from "react";
import "./Balance.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeBalance } from "../../app/features/userSlice";

export const Balance = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");

  const handleCardNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 16); // Keep only numbers and limit to 16 characters
    setCardNumber(input);
  };

  const handleExpiryMonthChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 2); // Keep only numbers and limit to 2 characters
    setExpiryMonth(input);
  };

  const handleExpiryYearChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 2); // Keep only numbers and limit to 2 characters
    setExpiryYear(input);
  };

  const handleCvcChange = (e) => {
    const input = e.target.value.replace(/\D/g, "").slice(0, 3); // Keep only numbers and limit to 3 characters
    setCvc(input);
  };

  const handleCardNameChange = (e) => {
    const input = e.target.value;
    setCardName(input);
  };

  const handleCancel = () => {
    setCardNumber("");
    setExpiryMonth("");
    setExpiryYear("");
    setCvc("");
    setCardName("");
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const payNow = () => {
    const isOk =
      cardNumber.length === 16 &&
      expiryMonth.length === 2 &&
      expiryYear.length === 2 &&
      cvc.length === 3 &&
      cardName.length !== 0;
    if (isOk) {
      dispatch(changeBalance(10000));
      navigate("/home");
    } else alert("Fill all fields correctly");
  };
  return (
    <div className="balance-wrapper">
      <div className="caption">Пополните баланс с помощью карты</div>
      <img
        className={"credit-cards"}
        src={
          "https://www.zenithimmigration.ca/wp-content/uploads/2022/06/visa-mastercard-logo.png"
        }
        alt={"credit cards"}
      />
      <div className="">
        <div className="container">
          <div className="row ">
            <div className="col-md-4 col-md-offset-4">
              <div className="credit-card-div">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="row ">
                      <div className="col-md-12">
                        <input
                          style={{ width: "100%" }}
                          type="text"
                          className="form-control"
                          placeholder="Enter Card Number"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                        />
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          Month
                        </span>
                        <input
                          style={{ minWidth: 60 }}
                          type="text"
                          className="form-control"
                          placeholder="MM"
                          value={expiryMonth}
                          onChange={handleExpiryMonthChange}
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          Year
                        </span>
                        <input
                          style={{ minWidth: 60 }}
                          type="text"
                          className="form-control"
                          placeholder="YY"
                          value={expiryYear}
                          onChange={handleExpiryYearChange}
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <span className="help-block text-muted small-font">
                          CCV
                        </span>
                        <input
                          style={{ minWidth: 60 }}
                          type="text"
                          className="form-control"
                          placeholder="CCV"
                          value={cvc}
                          onChange={handleCvcChange}
                        />
                      </div>
                      <div className="col-md-3 col-sm-3 col-xs-3">
                        <img
                          src="https://bootstraptema.ru/snippets/form/2016/form-card/card.png"
                          className="img-rounded"
                        />
                      </div>
                    </div>

                    <div className="row ">
                      <div className="col-md-12 pad-adjust">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name On The Card"
                          value={cardName}
                          onChange={handleCardNameChange}
                        />
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                        <input
                          type="submit"
                          className="btn btn-danger"
                          value="CANCEL"
                          onClick={handleCancel}
                        />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6 pad-adjust">
                        <input
                          onClick={payNow}
                          type="submit"
                          className="btn btn-warning btn-block"
                          value="PAY NOW"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
