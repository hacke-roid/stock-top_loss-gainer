import React, { useState } from "react";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyDetails from "./CompanyOverview/CompanyDetails";

const Routers = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue)


  const handleSearch = async (searchTerm) => {
    setInputValue(searchTerm);
  };

  const handleClick = (value) => {
    console.log(value)
    setInputValue(value);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App onSearch={handleSearch} onClick={handleClick}/>} />
          <Route
            path="/overview"
            element={<CompanyDetails inputValue={inputValue} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
