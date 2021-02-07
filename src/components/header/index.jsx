import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <StyledHeader><h1>Social Stocks - Prototype MK II</h1></StyledHeader>
)

const StyledHeader = styled.header`
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #b0b0b0;

  h1 {
    font-size: 26px;
  }
`;

export default Header;