import moment from "moment";
import { pwd } from "./constants/index.js";
import { readFile, writeFile } from "./helpers/fs.js";
import getAllTickers from "./helpers/GetAllTickers.js";
import getStockData from "./helpers/getStockData.js";

export default async function getAllStocks() {
  const stocksJson = await readFile(`${pwd}/src/data/allStocks.json`);
  const updatedAtJson = await readFile(`${pwd}/src/data/updatedAt.json`);
  if (
    Array.isArray(stocksJson) &&
    updatedAtJson === moment().format("DD/MM/YYYY")
  ) {
    return stocksJson
  } else {
    const allTickers = await getAllTickers();
    console.log("Total de Tickers:", allTickers.length);

    let allValidStocks = [];

    for (const [index, ticker] of allTickers.entries()) {
      console.log(`Falta ${allTickers.length - index} de ${allTickers.length}`);
      const stock = await getStockData(ticker);
      if (stock?.currentPrice && stock?.dividendHistoryLast10Years) {
        allValidStocks.push(stock);
      }
    }
    writeFile(`${pwd}/src/data/allStocks.json`, allValidStocks);
    writeFile(`${pwd}/src/data/updatedAt.json`, moment().format("DD/MM/YYYY"));
    return allValidStocks;
  }
}
