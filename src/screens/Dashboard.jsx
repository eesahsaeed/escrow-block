
import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Transaction from "../components/Transaction";

import authHelper from "../helper/auth-helper";

function TransactionEntry() {
  const [transactions, setTransactions] = useState([]);
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

            let rs = await response.json();
            setTransactions(rs)
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

            let rs = await response.json();
            setTransactions(rs)
          } catch(err){
            console.log(err);
          }
        }
      } else {
        navigate("/login");
      }
    }

    let t = getInfo();
  }, [])

  return (
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
      </div>
      {transactions.map((transaction, i) => (
        <Transaction transact={transaction} key={i} user={user}/>
      ))}
    </div>
  );
}

function UserEntry() {
  const user = authHelper.isAuthenticated();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getInfo(){
      if (user){
        if (user.role === "admin"){
          try{
            let response = await fetch("https://escrow-block.herokuapp.com/users/allUsers", {
              method: "GET",
              headers: {
                "Accept": "application/json",
                "Authorization": user.token
              }
            })

            let users = await response.json();
            setUsers(users)
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
    <div className="register__section__forms__content__history">
      <div className="register__section__forms__content__history__content">
        <div className="register__section__forms__content__history__heading__row">
          <div className="register__section__forms__content__history__heading__entry">
            First Name
          </div>
          <div className="register__section__forms__content__history__heading__entry">
            Last Name
          </div>
          <div className="register__section__forms__content__history__heading__entry">
            Email
          </div>
          <div className="register__section__forms__content__history__heading__entry">
            Mobile
          </div>
          <div className="register__section__forms__content__history__heading__entry">
            Role
          </div>
        </div>
      </div>
      {users.map((user, i) => (
        <div className="register__section__forms__content__history__details__row" key={i}>
          <div className="register__section__forms__content__history__details__entry">
            {user.firstName}
          </div>
          <div className="register__section__forms__content__history__details__entry">
            {user.lastName}
          </div>
          <div className="register__section__forms__content__history__details__entry">
            {user.email}
          </div>
          <div className="register__section__forms__content__history__details__entry">
            {user.mobileNumber}
          </div>
          <div className="register__section__forms__content__history__details__entry">
            {user.role}
          </div>
        </div>
      ))}
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
      {authHelper.isAuthenticated().role === "admin" ? <div
        style={{
          color: "#000000",
          textAlign: "center",
          fontSize: 26,
          marginTop: 20,
          fontWeight: 600,
        }}
        className="home__section__carousel__entry__overlay__content__heading"
      >
        <Tabs>
          <TabList>
            <Tab>Transactions</Tab>
            <Tab>Users</Tab>
          </TabList>

          <TabPanel>
            <h2>Transactions</h2>
            <TransactionEntry/>
          </TabPanel>
          <TabPanel>
            <h2>Users</h2>
            <UserEntry/>
          </TabPanel>
        </Tabs>
      </div> : <TransactionEntry />}
    </>
  );
}
