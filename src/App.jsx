import { React, useState } from 'react';
import styled from 'styled-components';
import Header from './components/header';
import StockSelector from './components/stockSelector';
import StockResultList from './components/stockResultList';

import './App.css';

const App = () => {
  const [ selectedStock, setSelectedStock] = useState({});
  
  const onStockSelect = (stockInfo) => {
    setSelectedStock(() => (stockInfo)
    );
  }

  return (
    <Wrapper>
      <Header />
      <StockSelector onStockSelect={onStockSelect} />
      <StockResultList stockInfo={selectedStock} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 15px;
  max-width: 800px;
  background-color: rgba(0,0,0,0.05);
`

export default App;
