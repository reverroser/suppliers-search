import styled from "styled-components";

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacingUnit * 9}px;
  padding: 0 ${({ theme }) => theme.spacingUnit * 0.5}px;
  border-bottom: thin solid ${({ theme }) => theme.colors.grey[20]};

  @media (min-width: 768px) {
    padding: 0 ${({ theme }) => theme.spacingUnit * 10}px;
  }
`;
