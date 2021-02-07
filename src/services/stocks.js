import { getStockInfo } from '../utils';

export const getStockQuery = async (stockSymbol) => (
  Promise.resolve(getStockInfo(stockSymbol))
);


export default getStockQuery;