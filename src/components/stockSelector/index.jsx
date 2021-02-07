import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { getStockQuery } from '../../services/stocks';
import { stockSymbols } from '../../utils';

const StockSelector = (props) => {
  const [stock, setStock] = useState('');
  const [startDate, setStartDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(dayjs().hour(240).format('YYYY-MM-DD'));

  const stockQuery = (event) => {
    event.preventDefault();
    // Some data validation before do the magic
    if (stock === '') {
      alert('Please select a stock');
    } else if (dayjs(endDate).diff(dayjs(startDate), 'd') < 10) {
      alert('Please make sure there current period is of a least 10 days');
    } else {
      getStockQuery(stock)
      .then((response)=> {
        props.onStockSelect(response);
      })
      .catch((e) => {
        alert(e);
      })
    }
  } 
  

  return (
    <StyledWrapper>
      <form onSubmit={stockQuery}>
        <StyledFormWrapper>
          <StyledFormElement>
            <label htmlFor='stock'>Stock Symbol</label>
            <select defaultValue="" id="stock" name="stock" onChange={(event)=>setStock(event.target.value)}>
              <option value="" disabled>Select a symbol</option>
              {stockSymbols.map((stock)=> 
                <option key={stock} value={stock}>{stock}</option>)}
            </select>
          </StyledFormElement>
          <StyledFormElement>
            <label htmlFor='start'>Start Date</label>
            <input type="date" id="start" name="start" value={startDate} min={dayjs().format('YYYY-MM-DD')} onChange={event =>setStartDate(event.target.value)} />
          </StyledFormElement>
          <StyledFormElement>
            <label htmlFor='end'>End Date</label>
            <input type="date" id="end" name="end" value={endDate} min={dayjs().hour(240).format('YYYY-MM-DD')} onChange={event =>setEndDate(event.target.value)} />
          </StyledFormElement>
          <StyledFormElement>
            <button type="submit">Get Stock info</button>
          </StyledFormElement> 
        </StyledFormWrapper>       
      </form>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #b0b0b0;
`;

const StyledFormWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, [col-start] 1fr);
`

const StyledFormElement = styled.div`
  padding-bottom: 15px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    
  }
`

export default StockSelector;