import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 0 2rem;
  border-bottom: thin solid ${({ theme }) => theme.colors.grey[20]};
`;

const TopBar = ({ children }) => <TopBarContainer>{children}</TopBarContainer>;

export default TopBar;
