import React, { useEffect, useState } from "react";
import CompanyInfo from "./ApiOverview";
import "./ComapnyDetails.css";

const CompanyDetails = ({ inputValue }) => {
  const [company, setCompany] = useState([]);
  const [storedInput, setStoredInput] = useState(inputValue || localStorage.getItem("savedInput") || "");

  const companyOverview = async () => {
    try {
      if (storedInput) {
        // Fetch company info using the saved input
        let data = await CompanyInfo(storedInput);
        setCompany(data);
      }
    } catch (error) {
      console.error("Error fetching company info:", error);
    }
  };

  useEffect(() => {
    // Save inputValue to localStorage when it changes
    if (inputValue) {
      localStorage.setItem("savedInput", inputValue);
      setStoredInput(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    companyOverview();
  }, [storedInput]);

  return (
    <div className="CompanyOverview_background">
      <div>
        <h1>Company Overview</h1>
        <div className="company_overview">
          <div className="img_container">
            <img src={company.logo} alt="Company logo" />
          </div>
          <h2>{company.symbol}</h2>
          <p>Market Capitalization: {company.marketCapitalization}%</p>
          <p>Exchange: {company.exchange}</p>
          <p>
            Weburl: <a href={company.weburl} target="_blank" rel="noopener noreferrer">{company.weburl}</a>
          </p>
          <p>IPO: {company.ipo}</p>
          <h3>Headline: {company.headline}</h3>
          <p>Summary: {company.news}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
