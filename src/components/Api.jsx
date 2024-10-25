const fetching = async (ticker) => {
  try {
    let data = await fetch(
      `https://api.api-ninjas.com/v1/stockprice?ticker=${ticker}`,
      {
        headers: {
          "X-Api-Key": `JYK2CoXqH3+PdS7oMk5yyw==tQQVRdKYCcMqtdBX`,
        },
      }
    );
    console.log(data);
    let finaData = await data.json();
    console.log(finaData);
    
        return {
            ticker: finaData.name,
            price: finaData.price,
            exchange: finaData.exchange,
        }
    } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetching;
