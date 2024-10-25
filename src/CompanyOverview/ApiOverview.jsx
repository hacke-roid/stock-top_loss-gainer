const CompanyInfo = async (ticker) => {
  console.log(ticker);

  let company = ticker;
  try {
    // let apiKey = "RX7QJVXZGGWTHMKA";
    let data = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${company}&token=csda4opr01qi0n6emcrgcsda4opr01qi0n6emcs0`
    );
    console.log(data);

    let news = await fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${company}&from=2024-10-20&to=2024-10-24&token=csda4opr01qi0n6emcrgcsda4opr01qi0n6emcs0`
    );
    console.log(news);

    // console.log(news);
    // console.log(data);
    let finalData = await data.json();
    let newsData = await news.json();
    console.log(newsData[0]);
    console.log(finalData);
    return {
      ticker: finalData.ticker,
      marketCapitalization: finalData.marketCapitalization,
      symbol: finalData.name,
      exchange: finalData.exchange,
      logo: finalData.logo,
      weburl: finalData.weburl,
      ipo: finalData.ipo,
      news: newsData[0].summary,
      headline: newsData[0].headline,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default CompanyInfo;
