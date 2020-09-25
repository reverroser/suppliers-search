import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.spacingUnit * 9}px;
  padding: 0 ${({ theme }) => theme.spacingUnit * 3}px;
  border-bottom: thin solid ${({ theme }) => theme.colors.grey[20]};
`;

const TopBar = ({ children }) => <TopBarContainer>{children}</TopBarContainer>;

export default TopBar;
