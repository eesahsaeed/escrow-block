import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";
import SelectBox from "../components/SelectBox";
import userPic from "../assets/userPic.jpg";
import openaccount1 from "../assets/open-account1.svg";
import openaccount2 from "../assets/open-account2.svg";
import openaccount3 from "../assets/open-account3.svg";

import authHelper from "../helper/auth-helper";

function TransactionEntry() {
  const user = authHelper.isAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    async function getInfo(){
      if (user){
        if (user.role === "admin"){
          try{
            let response = await fetch("https://escrow-block.herokuapp.com/transactions/allTransactions", {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Authorization": user.token
              }
            })

            return await response.json();
          } catch(err){
            console.log(err);
          }
        } else {
          try{
            let response = await fetch("https://escrow-block.herokuapp.com/transactions/userTransactions/", {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Authorization": user.token
              }
            })

            return await response.json();
          } catch(err){
            console.log(err);
          }
        }
      } else {
        navigate("/login");
      }
    }

    let t = getInfo();
    console.log(t);
  }, [])

  return (
    <div className="register__section__forms__content__history__details__row">
      <div className="register__section__forms__content__history__details__entry">
        March 16, 2022 <span>12:00 PM</span>
      </div>
      <div className="register__section__forms__content__history__details__entry">
        e288452ce3234
      </div>
      <div className="register__section__forms__content__history__details__entry">
        Bitcoin
      </div>
      <div className="register__section__forms__content__history__details__entry">
        BTC <span>0.000135000</span>
      </div>
      <div className="register__section__forms__content__history__details__entry">
        Pending
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <>
      <div className="register__section">
        <img src={waveBG} alt="waveBG" className="register__section__img" />
        <div className="register__section__content">
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__heading"
          >
            {authHelper.isAuthenticated().role === "admin" ? "Admin" : `${authHelper.isAuthenticated().firstName}'s`} Dashboard
          </div>
        </div>
      </div>
      <div
        style={{
          color: "#000000",
          textAlign: "center",
          fontSize: 26,
          marginTop: 20,
          fontWeight: 600,
        }}
        className="home__section__carousel__entry__overlay__content__heading"
      >
        Transactions
      </div>
      <div className="register__section__forms__content__history">
        <div className="register__section__forms__content__history__content">
          <div className="register__section__forms__content__history__heading__row">
            <div className="register__section__forms__content__history__heading__entry">
              Date
            </div>
            <div className="register__section__forms__content__history__heading__entry">
              Transaction ID
            </div>
            <div className="register__section__forms__content__history__heading__entry">
              Payment In
            </div>
            <div className="register__section__forms__content__history__heading__entry">
              Amount
            </div>
            <div className="register__section__forms__content__history__heading__entry">
              Status
            </div>
          </div>
          <TransactionEntry />
          <TransactionEntry />
        </div>
      </div>
    </>
  );
}
