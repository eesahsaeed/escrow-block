import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import waveBG from "../assets/waveBg.svg";
import InputBox from "../components/InputBox";
import loginSvg from "../assets/loginSvg.svg";

export default function ForgotPassword({ setNoHeaderFooter }) {
  useEffect(() => {
    setNoHeaderFooter(true);
    return () => {
      setNoHeaderFooter(false);
    };
  }, []);

  return (
    <>
      <div action="" className="login__container">
        <div className="login__container__left">
          <div className="login__container__left__heading">
            Reset your Password
          </div>

          <form className="register__section__forms__content__inputs__one">
            <InputBox
              placeholder="Your Phone or Email"
              required={true}
              type="text"
            />
          </form>

          <div
            style={{ marginTop: 50 }}
            className="register__section__forms__content__btns"
          >
            <Link
              style={{ padding: "1em 4em" }}
              to="/login"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="button__secondary"
            >
              Request New Password
            </Link>
            <div style={{ color: "#000000" }} className="new__to__login">
              New on Escrowblockh?
              <span>
                <Link to="/login"> Click here to Register</Link>
              </span>
            </div>
          </div>
        </div>
        <div className="login__container__right">
          <img
            src={loginSvg}
            alt="loginSvg"
            className="login__container__right__img"
          />
        </div>
      </div>
    </>
  );
}
