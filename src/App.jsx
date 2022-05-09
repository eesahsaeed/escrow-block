import React, { useState } from "react";
import { Route, Routes } from "react-router";
import HomeScreen from "./screens/HomeScreen";
import "./App.scss";
import Register from "./screens/Register";
import RegisterIndividual from "./screens/RegisterIndividual";
import Login from "./screens/Login";
import AboutUs from "./screens/AboutUs";
import SellBitCoin from "./screens/SellBitCoin";
import BuyBitCoin from "./screens/BuyBitCoin";
import TradeForMe from "./screens/TradeForMe";
import ForexTraning from "./screens/ForexTraning";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ForgotPassword from "./screens/ForgotPassword";
import Dashboard from "./screens/Dashboard";

export default function App() {
  const [noHeaderFooter, setNoHeaderFooter] = useState(false);
  return (
    <>
      {noHeaderFooter ? null : <Header />}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/register"
          element={<Register setNoHeaderFooter={setNoHeaderFooter} />}
        />
        <Route path="/individual-register" element={<RegisterIndividual />} />
        <Route
          path="/login"
          element={<Login setNoHeaderFooter={setNoHeaderFooter} />}
        />
        <Route path="/trade-for-me" element={<TradeForMe />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sell-bitcoin" element={<BuyBitCoin />} />
        <Route path="/buy-bitcoin" element={<SellBitCoin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forex-training" element={<ForexTraning />} />
        <Route
          path="/forgot-paswword"
          element={<ForgotPassword setNoHeaderFooter={setNoHeaderFooter} />}
        />
      </Routes>
      {noHeaderFooter ? null : <Footer />}
    </>
  );
}
