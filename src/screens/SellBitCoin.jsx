import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sellBictvoinSvg from "../assets/sellBictvoinSvg.svg";
import bitcoin from "../assets/bitcoin.svg";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";

export default function BuyBitCoin() {
  const [select, setSelect] = useState(false);
  const [selectPay, setSelectPay] = useState(false);
  const [selectCurrency, setSelectCurrency] = useState(false);

  return (
    <>
      <div style={{ marginTop: "4.6em" }} className="login__container__header">
        <div className="login__container__left">
          <div className="register__section__forms__content__heading">
            Sell Bitcoin
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
            Sell
          </div>
          <div className="buy__select__input">
            <img src={bitcoin} alt="bitcoin" className="buy__select__img" />
            <input
              type="text"
              placeholder="Bitcoin"
              className="buy__text__input"
            />
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
              <div className="start__up__container__form__input__box__content">
                <input
                  type="text"
                  required={true}
                  placeholder="All Payments Method"
                  className="start__up__container__form__input__box__field"
                />
                <button
                  onClick={() => {
                    selectPay ? setSelectPay(false) : setSelectPay(true);
                  }}
                  className="input__btn"
                >
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
              {selectPay ? (
                <div className="payments__entry__wrapper">
                  <button
                    onClick={() => {
                      setSelectPay(false);
                    }}
                    className="payments__entry"
                  >
                    Via Bank
                  </button>
                  <button
                    onClick={() => {
                      setSelectPay(false);
                    }}
                    className="payments__entry"
                  >
                    Via Bank
                  </button>
                  <button
                    onClick={() => {
                      setSelectPay(false);
                    }}
                    className="payments__entry"
                  >
                    Via Bank
                  </button>
                </div>
              ) : null}
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
                  type="text"
                  required={true}
                  placeholder="Any Payment"
                  className="start__up__container__form__input__box__field"
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
                    }}
                    className="payments__entry"
                  >
                    USD
                  </button>
                  <button
                    onClick={() => {
                      setSelectCurrency(false);
                    }}
                    className="payments__entry"
                  >
                    EURO
                  </button>
                  <button
                    onClick={() => {
                      setSelectCurrency(false);
                    }}
                    className="payments__entry"
                  >
                    Naira
                  </button>
                </div>
              ) : null}
            </div>
          </div>

          <button
            style={{ marginTop: "2em", padding: "1em 4em" }}
            className="button__secondary"
            // onClick={() => {
            //   window.scrollTo({
            //     top: 0,
            //     behavior: "smooth",
            //   });
            // }}
          >
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
