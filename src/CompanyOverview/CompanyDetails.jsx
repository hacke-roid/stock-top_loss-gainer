import React, { useEffect, useState } from "react";
import CompanyInfo from "./ApiOverview";
import "./ComapnyDetails.css";

const CompanyDetails = ({ inputValue }) => {
  const [company, setCompany] = useState([]);
  console.log(inputValue);

  const companyOverview = async (savedValue) => {
    let data = await CompanyInfo(inputValue);
    console.log(data);
    setCompany(data);
  };

  useEffect(() => {
    const savedValue = localStorage.getItem('inputValue');
    if (savedValue) {
      companyOverview(savedValue);
    }
    companyOverview(savedValue);
  }, []);

  return (
    <div className="CompanyOverview_background">
      <div>
        <h1>Company Overview</h1>
        {
          <div className="company_overview">
            <div className="img_container">
              <img src={company.logo}></img>
            </div>
            <h2>{company.symbol}</h2>
            <p>Market Capitalization: {company.marketCapitalization}%</p>
            <p>Exchange: {company.exchange}</p>
            <p>
              Weburl: <a>{company.weburl}</a>
            </p>
            <p>IPO: {company.ipo}</p>
            <h3>Headline: {company.headline}</h3>
            <p>Summary: {company.news}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default CompanyDetails;
