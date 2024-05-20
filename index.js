import getAllStocks from "./src/GetAllStocks.js"
import getTop10 from "./src/GetTop10.js";

(async () => {
  // OBTER TODAS AS AÇÕES
  const allStocks = await getAllStocks()
  // OBTER TOP 10 MAIORES DIVIDEND YIELD
  const top10 = getTop10(allStocks)
  console.log('Top 10: ', top10);
})()