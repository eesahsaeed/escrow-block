import React from "react";
import { Link, useNavigate } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";
import { useState } from "react";
import axios from "axios";
import SelectBox from "../components/SelectBox";

export default function RegisterIndividual() {
  const [errors, setErrors] = useState({});
  const [exist, setExist] = useState(null);
  const [wrong, setWrong] = useState("");
  const [values, setValues] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    preferredCommunication: "",
    aliasName: "",
    gender: "",
    date: "",
    countryOfOrigin: "",
    passportOrId: "",
    mobileNumber: "",
    telegram: "",
    streetAddress: "",
    city: "",
    country: "",
    state: "",
    zipCode: "",
    socialSecurityNumber: "",
    grossAnnualIncome: "",
    employmentStatus: "",
    occupation: "",
    companyName: "",
    sourceOfFunds: "",
    purposeOfEscrowAccount: "",
    expectedTransactionSizePerTrade: "",
    accountHolderName: "",
    fullBeneficiaryAddress: "",
    bankName: "",
    fullBankAddress: "", 
    accountNumber: "",
    routingNumber: "",
    intermediaryBank: "",
    yearsOfExperience: "",
    tradingAccount: "",
    hearAboutUs: "",
    passportIdCopy: "",
    proofOfAddress: "",
    bankStatement: "",
    photo: "",
    password: "",
    confirmPassword: ""
  })
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    let name = e.target.name;
    let value = null;

    switch (name){
      case "passportIdCopy":
        value = e.target.files[0];
        break;
      case "proofOfAddress":
        value = e.target.files[0];
        break;
      case "bankStatement":
        value = e.target.files[0];
        break;
      case "photo":
        value = e.target.files[0];
        break;
      default:
        value = e.target.value;
        break;
    }
    
    setValues({
      ...values,
      [name]: value,
    });
  };

  async function SignUp(event) {
    event.preventDefault();
    let userData = new FormData();
    values.userName && userData.append("userName", values.userName);
    values.firstName && userData.append("firstName", values.firstName);
    values.lastName && userData.append("lastName", values.lastName);
    values.email && userData.append("email", values.email);
    values.preferredCommunication && userData.append("preferredCommunication", values.preferredCommunication);
    values.aliasName && userData.append("aliasName", values.aliasName);
    values.gender && userData.append("gender", values.gender);
    values.date && userData.append("date", values.date);
    values.countryOfOrigin && userData.append("countryOfOrigin", values.countryOfOrigin);
    values.passportOrId && userData.append("passportOrId", values.passportOrId);
    values.mobileNumber && userData.append("mobileNumber", values.mobileNumber);
    values.telegram && userData.append("telegram", values.telegram);
    values.streetAddress && userData.append("streetAddress", values.streetAddress);
    values.city && userData.append("city", values.city);
    values.country && userData.append("country", values.country);
    values.state && userData.append("state", values.state);
    values.zipCode && userData.append("zipCode", values.zipCode);
    values.socialSecurityNumber && userData.append("socialSecurityNumber", values.socialSecurityNumber);
    values.grossAnnualIncome && userData.append("grossAnnualIncome", values.grossAnnualIncome);
    values.employmentStatus && userData.append("employmentStatus", values.employmentStatus);
    values.occupation && userData.append("occupation", values.occupation);
    values.companyName && userData.append("companyName", values.companyName);
    values.sourceOfFunds && userData.append("sourceOfFunds", values.sourceOfFunds);
    values.purposeOfEscrowAccount && userData.append("purposeOfEscrowAccount", values.purposeOfEscrowAccount);
    values.expectedTransactionSizePerTrade && userData.append("expectedTransactionSizePerTrade", values.expectedTransactionSizePerTrade);
    values.accountHolderName && userData.append("accountHolderName", values.accountHolderName);
    values.fullBeneficiaryAddress && userData.append("fullBeneficiaryAddress", values.fullBeneficiaryAddress);
    values.fullBankAddress && userData.append("fullBankAddress", values.fullBankAddress);
    values.accountNumber && userData.append("accountNumber", values.accountNumber);
    values.routingNumber && userData.append("routingNumber", values.routingNumber);
    values.intermediaryBank && userData.append("intermediaryBank", values.intermediaryBank);
    values.yearsOfExperience && userData.append("yearsOfExperience", values.yearsOfExperience);
    values.tradingAccount && userData.append("tradingAccount", values.tradingAccount);
    values.hearAboutUs && userData.append("hearAboutUs", values.hearAboutUs);
    values.passportIdCopy && userData.append("passportIdCopy", values.passportIdCopy);
    values.proofOfAddress && userData.append("proofOfAddress", values.proofOfAddress);
    values.bankStatement && userData.append("bankStatement", values.bankStatement);
    values.photo && userData.append("photo", values.photo);
    values.password && userData.append("password", values.password);
    values.confirmPassword && userData.append("confirmPassword", values.confirmPassword);

    const abortController = new AbortController();
    const signal = abortController.signal;

    async function register(user){
      try{
        //https://escrow-block.herokuapp.com/users/register
       let response = await fetch("https://escrow-block.herokuapp.com/users/register", {
          method: "POST",
          headers: {
            "Accept": "application/json"
          },
          body: user
        })

        return await response.json();
      } catch(err){
        console.log(err)
      }
    }

    register(userData).then(data => {
      console.log(data);
      if (data.success){
        navigate("/login")
      } else if (data.errors){
        setErrors(data.errors)
      } else if (data.message){
        setExist(data)
        console.log(data);
      } else {
        setWrong(data.error)
      }
    }).catch(err => {
      console.log(err);
    })

    /*const config = {
      headers: { 
        "Accept": "application/json" 
      },
    };

    axios.post(
      "https://escrow-block.herokuapp.com//users/register",
      {body: userData},
      config
    ).then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });*/
  }

  return (
    <>
      <div className="register__section">
        <img src={waveBG} alt="waveBG" className="register__section__img" />
        <div className="register__section__content">
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__heading__sub"
          >
            Already Registered? <Link to="/login"> Click here to Login</Link>
          </div>
          <div
            style={{ color: "#000000" }}
            className="home__section__carousel__entry__overlay__content__heading"
          >
            Individual Account Registration
          </div>
        </div>
      </div>
      <div className="register__section__forms">
        <div className="register__section__forms__content">
          <div className="register__section__forms__content__para">
            Thank you for your interest in registering for an Escrow Block
            account. You will be required to upload your Passport and Proof of
            Residential Address (bank statement/utility bill no older than 3
            months) at the end of this form. Please have them ready before you
            begin. Once you have submitted your application, we aim to process
            your account as soon as possible. Our compliance officer will notify
            you by email upon successful verification and a dedicated trading
            group will be set up for you. Should you have any questions, please
            contact us at contact@escrowblockhk.com. Please note the minimum
            deposit or withdrawal size is $10,000
          </div>
          {errors && Object.keys(errors).length !== 0 && <div style={{
            color: "",
            border: "1px solid red",
            width: "85%",
            paddingTop: "10px",
            backgroundColor: "#ff8080",
            borderRadius: "5px"
          }}><h3>Error Occurred{
            exist && (<span>: {exist.message} <Link to="/login">Login</Link></span>)
          }
          {
            wrong && wrong
          }</h3></div>}
        </div>
      </div>
      <form onSubmit={SignUp}
        className="register__section__forms__content__inputs__wrapper"
      >
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="userName"
            placeholder="username"
            required={true}
            // value={username}
            type="text"
            errors={errors}
            onChange={onChangeHandler}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="firstName"
              placeholder="First Name"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="lastName"
              placeholder="Last Name"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="email"
            placeholder="E-mail Address"
            required={true}
            type="email"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <SelectBox
              name="preferredCommunication"
              placeholder="Preferred Communication"
              option1={<option value="Telegram" />}
              option2={<option value="Email" />}
              option3={<option value="WhatsApp" />}
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="aliasName"
              placeholder="Alias/Other/Former Name(s)(if any):"
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <SelectBox
            name="gender"
            placeholder="Gender"
            required={true}
            option1={<option value="Male" />}
            option2={<option value="Female" />}
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div
          style={{ marginTop: 8 }}
          className="register__section__forms__content__inputs__one"
        >
          <InputBox
            // value="2017/06/01"
            name="date"
            placeholder="date"
            required={true}
            type="date"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="countryOfOrigin"
              placeholder="Country of Origin"
              required={true}
              option1={<option value="Middle East/Africa " />}
              option2={<option value="Asia" />}
              option3={<option value="Europe" />}
              option4={<option value="South America" />}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="passportOrId"
              placeholder="Your Passport or ID number"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="mobileNumber"
              placeholder="Mobile Number"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="telegram"
              placeholder="Telegram (If Any)"
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="streetAddress"
            placeholder="Street Address"
            required={true}
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="city"
              placeholder="City"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="country"
              placeholder="Country"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="state"
              placeholder="State/Province/Region"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="zipCode"
              placeholder="Zip or Post Code"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="socialSecurityNumber"
            placeholder="Social Security Number (if applicable):"
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="grossAnnualIncome"
              placeholder="Gross Annual Income"
              required={true}
              variant="select"
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="employmentStatus"
              placeholder="Employment Status"
              required={true}
              variant="select"
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="occupation"
              placeholder="Occupation"
              required={true}
              variant="select"
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="companyName"
              placeholder="Name of Your Company/Employer"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="sourceOfFunds"
            placeholder="Source of Funds              "
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="purposeOfEscrowAccount"
            placeholder="Please state your Purpose of Opening an Escrowblockhk account              "
            required={true}
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="expectedTransactionSizePerTrade"
            placeholder="Expected Transaction Size Per Trade"
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="accountHolderName"
              placeholder="Account Holder Name"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="fullBeneficiaryAddress"
              placeholder="Full Beneficiary Address"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="bankName"
              placeholder="Bank Name"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="fullBankAddress"
              placeholder="Full Bank Address"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__two">
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="accountNumber"
              placeholder="Account Number"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
          <div className="register__section__forms__content__inputs__one">
            <InputBox
              name="routingNumber"
              placeholder="Routing Number (ABA) (if any)"
              required={true}
              type="text"
              onChange={onChangeHandler}
              errors={errors}
            />
          </div>
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="intermediaryBank"
            placeholder="Is There an Intermediary Bank?"
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="yearsOfExperience"
            placeholder="Years of experience trading digital/crypto assets"
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="tradingAccountControl"
            placeholder="Will any person other than the applicant of this account have control or manage the trading account?"
            required={true}
            variant="select"
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="hearAboutUs"
            placeholder="How did you hear about us?"
            required={true}
            type="text"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>
            Passport ID copy (for all nominated persons)
          </div>
          <InputBox
            name="passportIdCopy"
            placeholder="Passport ID copy (for all nominated persons)"
            required={true}
            type="file"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>Proof of Address</div>
          <InputBox
            name="proofOfAddress"
            placeholder="Proof of Address"
            required={true}
            type="file"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>Bank Statement</div>
          <InputBox
            name="bankStatement"
            placeholder="Bank Statement"
            required={true}
            type="file"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <div style={{ marginBottom: 14 }}>
            Attach a photo of yourself holding your ID card close to your face
          </div>
          <InputBox
            name="photo"
            placeholder="Attach a photo of yourself holding your ID card close to your face"
            required={true}
            type="file"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="password"
            placeholder="Password"
            required={true}
            type="password"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>{" "}
        <div className="register__section__forms__content__inputs__one">
          <InputBox
            name="confirmPassword"
            placeholder="Confirm Password"
            required={true}
            type="password"
            onChange={onChangeHandler}
            errors={errors}
          />
        </div>
        <input
          // onClick={() => {
          //   window.scrollTo
          //     top: 0,
          //     behavior: "smooth"
          //
          //
          type="submit"
          onClick={SignUp}
          style={{
            marginTop: 40,
            width: 250,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          className="button"
          value="Register"/>
      </form>
    </>
  );
}
