import checkProfitLast10Years from "./CheckProfitLast10Years.js";
import getCurrentPrice from "./GetCurrentPrice.js";
import getDividendHistoryLast10Years from "./GetDividendHistoryLast10Years.js";

export default async function getStockData(ticker) {

  const currentPrice = await getCurrentPrice(ticker)
  const dividendHistoryLast10Years = await getDividendHistoryLast10Years(ticker)
  const hasProfitLast10Years = await checkProfitLast10Years(ticker)

  const stock = {
    ticker,
    currentPrice,
    dividendHistoryLast10Years,
    hasProfitLast10Years,
  }
  return stock
}
