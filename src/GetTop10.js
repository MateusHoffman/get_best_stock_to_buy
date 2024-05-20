export default function getTop10(stocks) {
  return stocks
    .map((stock) => {
      const sortDividendValue = stock.dividendHistoryLast10Years.sort(
        (a, b) => a.value - b.value
      );
      const thirdLowestValue = sortDividendValue[2];
      const dividendYield = thirdLowestValue.value / stock.currentPrice * 100;
      return {
        ticker: stock.ticker,
        dividendYield: dividendYield.toFixed(5),
      };
    })
    .sort((a, b) => b.dividendYield - a.dividendYield)
    .slice(0, 10);
}
