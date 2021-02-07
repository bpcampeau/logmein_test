import React from 'react';
import { isEmpty } from 'lodash'
import styled from 'styled-components';

const StockResultList = (props) => { 
  const { stockInfo } = props;

  return (
    <StyledWrapper>
      {!isEmpty(stockInfo) ?
        <StyledTable>
          <tbody>
            <tr>
              <th>Stock Name</th>
              {stockInfo.socialMedia.map(
                (socialMedia)=>
                  <th key={socialMedia.name}>{socialMedia.name}</th>
              )}
              <th>Price</th>
              <th>Recommendation</th>                       
            </tr>
            <tr>
              <td>{stockInfo.name}</td>
              {stockInfo.socialMedia.map(
                (socialMedia)=>
                  <td key={socialMedia.count}>{socialMedia.count} posts</td>
              )}
              <td>${stockInfo.price}</td>
              <td>{stockInfo.recommendation}</td>
            </tr>
          </tbody>
        </StyledTable>
        : `Please select a stock`}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.section`
  padding: 15px;
  box-sizing: border-box;
`;

const StyledTable = styled.table`
  width: 100%;

  th {
    font-weight: bold;
    text-align: left;
  }

  td, th {
    padding: 15px;
    border-bottom: 1px solid #000000;
  }
`

export default StockResultList;