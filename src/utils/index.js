export const stockSymbols = ['GME', 'NTDOY', 'ATVI', 'AVID', 'LOGI', 'SNE', 'TCEHY'];
const recommendation = ['BUY', 'HOLD', 'SELL'];
const socialMedia = ['Facebook', 'Twitter', 'LinkedIn']

const getStockPrice = () => {
  const stockPrice = Math.random() * 99;

  return stockPrice.toFixed(2);
}

const getRecommendation = () => recommendation[Math.floor(Math.random()*3)];

export const getStockInfo = (stock) => {
  const socialMediaCounts = socialMedia.map((sm) => (
    {
      "name": sm,
      'count': Math.ceil(Math.random()*999)
    }
  ));

  const stockInfo = {
    "name": stock,
    "socialMedia": socialMediaCounts,
    "price": getStockPrice(),
    "recommendation": getRecommendation(),
  }

  return stockInfo;

} 