import fetchAPI from "./fetch.js";

async function fetchTickers() {
  const url =
    "https://statusinvest.com.br/category/advancedsearchresultpaginated?search=%7B%22Sector%22%3A%22%22%2C%22SubSector%22%3A%22%22%2C%22Segment%22%3A%22%22%2C%22my_range%22%3A%22-20%3B100%22%2C%22forecast%22%3A%7B%22upsidedownside%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22estimatesnumber%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22revisedup%22%3Atrue%2C%22reviseddown%22%3Atrue%2C%22consensus%22%3A%5B%5D%7D%2C%22dy%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_l%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22peg_ratio%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_vp%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_ativo%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22margembruta%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22margemebit%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22margemliquida%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_ebit%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22ev_ebit%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22dividaliquidaebit%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22dividaliquidapatrimonioliquido%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_sr%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_capitalgiro%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22p_ativocirculante%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22roe%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22roic%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22roa%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22liquidezcorrente%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22pl_ativo%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22passivo_ativo%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22giroativos%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22receitas_cagr5%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22lucros_cagr5%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22liquidezmediadiaria%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22vpa%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22lpa%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%2C%22valormercado%22%3A%7B%22Item1%22%3Anull%2C%22Item2%22%3Anull%7D%7D&orderColumn=&isAsc=&page=0&take=621&CategoryType=1";

  const method = "GET";
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    Cookie:
      "_adasys=8a9c4d7d-f7e2-4157-9f5a-9b357dc3e93d; G_ENABLED_IDPS=google; cf_clearance=oFL09ajCn2HC2n7daiZVTWI01FonExl9fsjzaK8IqJ4-1684972159-0-160; _gcl_au=1.1.630088004.1685448522; _fbp=fb.2.1687802244255.1322345328; _ga=GA1.3.679689664.1685448523; __hstc=176625274.12517fd7a8c250ffb42e5b0dd214337c.1687802271698.1687802271698.1687802271698.1; hubspotutk=12517fd7a8c250ffb42e5b0dd214337c; _ga_69GS6KP6TJ=GS1.1.1687802244.2.1.1687802297.7.0.0; .StatusInvest=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJBY2NvdW50SWQiOiI0NTAyNDgiLCJOYW1lIjoiTWF0ZXVzIEhvZmZtYW4iLCJFbWFpbCI6Im1hdGV1c2hvZmZtYW5wcm9AZ21haWwuY29tIiwiSW50ZXJmYWNlVHlwZSI6IldlYiIsIklwIjoiOjpmZmZmOjEwLjEwMC4xMC4xMzciLCJuYmYiOjE2ODc5NDM4ODUsImV4cCI6MTY4ODAzMDI4NSwiaWF0IjoxNjg3OTQzODg1LCJpc3MiOiJTdGF0dXNJbnZlc3QiLCJhdWQiOiJTdGF0dXNJbnZlc3QifQ.xX_v-2MZzZaziY9mY8T7GTTBpujFZxZo2f1Ph0-xy89lxBv2Nub0JvL1kIXkppk1z6upHuOjUwYP-noCiOQfmA; __cf_bm=zog58fXOUSTJ402mbTvjrLibCgCZWOCKczFWDhSssbE-1688490740-0-Afz7y4JEWl4FvKrdxs3MyFhNXoWJPh7Er7PYmhO6hjKDxS3G/bEY37YgwyrziJcWCA==; .StatusInvestAd=1",
    Origin: "https://statusinvest.com.br",
    Referer: "https://statusinvest.com.br/acoes/taee4",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
  };

  const data = await fetchAPI(url, { method, headers });
  return data;
}

function formatTickers(tickers) {
  const tickerList = tickers.list.map(e => e.ticker)
  const formatTickers = [...new Set(tickerList)]
  return formatTickers
}

export default async function getAllTickers() {
  const dataTickers = await fetchTickers();
  const formattedTickers = formatTickers(dataTickers);
  return formattedTickers;
}
