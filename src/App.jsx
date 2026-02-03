import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPortfolio from "./components/MainPortfolio";
import Web3Page from "./components/Web3Page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPortfolio />} />
      <Route path="/web3" element={<Web3Page />} />
    </Routes>
  );
};

export default App;
