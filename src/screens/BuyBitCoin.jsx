import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import sellBictvoinSvg from "../assets/sellBictvoinSvg.svg";
import bitcoin from "../assets/bitcoin.svg";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";

import authHelper from "../helper/auth-helper";

export default function BuyBitCoin() {
  const [values, setValues] = useState({});
  const [selectCurrency, setSelectCurrency] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authHelper.isAuthenticated()){
      navigate("/login");
    }
  }, [])

  async function handleClick(e){
    e.preventDefault();

    let response = await fetch("https://escrow-block.herokuapp.com//transactions/buyBitcoin", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": authHelper.isAuthenticated().token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })

    let rs = await response.json()
    if (rs.success){
      navigate("/dashboard");
    }
  }

  return (
    <>
      <div style={{ marginTop: "4.6em" }} className="login__container__header">
        <div className="login__container__left">
          <div className="register__section__forms__content__heading">
            Buy Bitcoin
          </div>
          <div className="register__section__forms__content__para">
            Escrow Block KYC Forms Below are links for Individuals or
            Corporations who wish to setup an Escrow Block OTC which will enable
            you easily purchase your bitcoin from us. Please select the form
            that best describes your account type.
          </div>
          <div
            style={{ width: "100%", marginBottom: ".4em", marginLeft: ".7em" }}
            className="buy__select__input__content"
          >
            Buy
          </div>
          <div
            // onClick={() => {
            //   select ? setSelect(false) : setSelect(true);
            // }}
            className="buy__select__input"
          >
            <img src={bitcoin} alt="bitcoin" className="buy__select__img" />
            <input
              type="text"
              placeholder="Bitcoin"
              className="buy__text__input"
            />
            {/* {select ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-up"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            )}

            {select ? (
              <div className="buy__select__input__entry__wrapper">
                <button className="buy__select__input__entry">Bitcoin</button>
                <button className="buy__select__input__entry">Bitcoin</button>
                <button className="buy__select__input__entry">Bitcoin</button>
              </div>
            ) : null} */}
          </div>
          <div className="bitcoin__value__card">
            <span>1 BTC = </span> 16,746,442.19 NGN{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25.721"
              height="15.521"
              viewBox="0 0 25.721 15.521"
            >
              <g
                id="trending-up-outline-svgrepo-com"
                transform="translate(-45.879 -142.5)"
              >
                <path
                  id="Path_21784"
                  data-name="Path 21784"
                  d="M352,144h5.95v5.95"
                  transform="translate(-287.851)"
                  fill="none"
                  stroke="#005dff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
                <path
                  id="Path_21785"
                  data-name="Path 21785"
                  d="M48,171.049l6.447-6.447a1.7,1.7,0,0,1,2.4,0l2.7,2.7a1.7,1.7,0,0,0,2.4,0l7.3-7.3"
                  transform="translate(0 -15.15)"
                  fill="none"
                  stroke="#005dff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                />
              </g>
            </svg>
          </div>
          <div className="register__section__forms__content__inputs__one">
            <div
              style={{ position: "relative" }}
              className="start__up__container__form__input__box"
            >
              <div className="start__up__container__form__input__box__label">
                Get Paid Via
              </div>
              
              <div>
              <input
                className="styled-checkbox"
                id="styled-checkbox"
                type="checkbox"
                name="female"
                checked
              />
              <label
                style={{ color: "#1c0a15", fontSize: 16 }}
                htmlFor="styled-checkbox"
              >
                Wallet Address
              </label>
            </div>
            </div>
          </div>
          <div className="register__section__forms__content__inputs__one">
            <div
              style={{ position: "relative" }}
              className="start__up__container__form__input__box"
            >
              <div className="start__up__container__form__input__box__label">
                I have (Amount to Change)
              </div>
              <div className="start__up__container__form__input__box__content">
                <input
                  type="number"
                  required={true}
                  placeholder="Any Payment"
                  className="start__up__container__form__input__box__field"
                  onChange={(e) => {
                    setValues({...values, paymentAmount: e.target.value});
                  }}
                />
                <button
                  onClick={() => {
                    selectCurrency
                      ? setSelectCurrency(false)
                      : setSelectCurrency(true);
                  }}
                  className="input__btn"
                >
                  <span>$</span>
                  <span>Є</span>
                  <span>$</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-align-justify"
                  >
                    <line x1="21" y1="10" x2="3" y2="10"></line>
                    <line x1="21" y1="6" x2="3" y2="6"></line>
                    <line x1="21" y1="14" x2="3" y2="14"></line>
                    <line x1="21" y1="18" x2="3" y2="18"></line>
                  </svg>
                </button>
              </div>
              {selectCurrency ? (
                <div className="payments__entry__wrapper">
                  <button
                    onClick={() => {
                      setSelectCurrency(false);
                      setValues({...values, currency: "USD"});
                    }}
                    className="payments__entry"
                  >
                    USD
                  </button>
                  <button
                    onClick={() => {
                      setSelectCurrency(false);
                      setValues({...values, currency: "EURO"});
                    }}
                    className="payments__entry"
                  >
                    EURO
                  </button>
                  <button
                    onClick={() => {
                      setSelectCurrency(false);
                      setValues({...values, currency: "NAIRA"});
                    }}
                    className="payments__entry"
                  >
                    Naira
                  </button>
                </div>
              ) : null}
            </div>
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox placeholder="Wallet Address" type="text" onChange={(e) => {
              setValues({...values, walletAddress: e.target.value});
            }}/>
          </div>
          <button
            style={{ marginTop: "2em", padding: "1em 4em" }}
            className="button__secondary"
            onClick={handleClick}>
            Submit Offer Request
          </button>
        </div>
        <div className="login__container__right">
          <img
            src={sellBictvoinSvg}
            alt="sellBitcoinSvg"
            className="login__container__right__img"
          />
        </div>
      </div>
    </>
  );
}

{
  /* <div className="register__section__forms">
<div className="register__section__forms__content">
  <div className="register__section__forms__content__heading">
    Sell Bitcoin
  </div>
  <div className="register__section__forms__content__para">
    Escrow Block KYC Forms Below are links for Individuals or
    Corporations who wish to setup an Escrow Block OTC which will enable
    you easily purchase your bitcoin from us. Please select the form
    that best describes your account type.
  </div>
  <div className="register__section__forms__content__btns">
    <Link
      style={{ marginRight: "1em" }}
      to="/individual-register"
      className="button__secondary"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      Individual
    </Link>
    <Link
      to="/individual-register"
      className="button__secondary"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      Corporate
    </Link>
  </div>
</div>
</div> */
}
