import styled from "styled-components";
import { rgba } from "polished";

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacingUnit * 1.5}px;
  background-color: ${({ theme, hasFocus }) =>
    hasFocus ? theme.colors.white : theme.colors.grey[20]};
  border-radius: ${({ theme }) => theme.spacingUnit * 0.5}px;
  box-shadow: ${({ theme, hasFocus }) =>
    hasFocus ? `0 0 8px 2px ${rgba(theme.colors.primary, 0.4)}` : ""};
  border: thin solid
    ${({ theme, hasFocus }) =>
      hasFocus ? rgba(theme.colors.primary, 0.4) : theme.colors.grey[20]};
  transition: all 0.2s linear;

  @media (min-width: 768px) {
    min-width: ${({ hasFocus }) => (hasFocus ? 380 : 260)}px;
  }

  i {
    font-size: 16px;
    margin-right: ${({ theme }) => theme.spacingUnit * 1.5}px;
  }

  input {
    width: 100%;
    font-size: 14px;
    border: 0;
    outline: 0;
    background-color: ${({ theme, hasFocus }) =>
      hasFocus ? theme.colors.white : theme.colors.grey[20]};
    transition: all 0.2s linear;
  }
`;
