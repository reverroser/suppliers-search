import styled from "styled-components";
import { rgba } from "polished";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownSelect = styled.div`
  font-family: ${({ theme }) => theme.font.content};
  padding: ${({ theme }) =>
    `${theme.spacingUnit * 1.5}px ${theme.spacingUnit * 3}px`};
  background-color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.grey[20] : theme.colors.white};
  border-radius: ${({ theme }) => theme.spacingUnit * 0.5}px;
  border: thin solid ${({ theme }) => theme.colors.grey[20]};
  transition: all 0.2s linear;
  cursor: pointer;

  i {
    margin-left: ${({ theme }) => theme.spacingUnit}px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "")};
    transition: all 0.2s linear;
  }

  &:hover {
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.grey[20] : theme.colors.grey[10]};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.grey[20]};
  }
`;

export const DropdownOptions = styled.div`
  position: absolute;
  min-width: 180px;
  box-shadow: 1px 1px 6px 1px ${({ theme }) => rgba(theme.colors.black, 0.1)};
  border-radius: ${({ theme }) => theme.spacingUnit * 0.5}px;
  margin-top: ${({ theme }) => theme.spacingUnit}px;
  padding: ${({ theme }) => theme.spacingUnit}px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
`;

export const DropdownOption = styled.div`
  border-radius: ${({ theme }) => theme.spacingUnit * 2}px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors.black};
  font-weight: ${({ theme, isActive }) => (isActive ? 600 : 400)};
  background-color: ${({ theme, isActive }) =>
    isActive ? rgba(theme.colors.primary, 0.9) : theme.colors.white};
  padding: ${({ theme }) =>
    `${theme.spacingUnit}px ${theme.spacingUnit * 2}px`};
  margin: ${({ theme }) => theme.spacingUnit * 0.5}px 0;
  transition: all 0.2s linear;
  cursor: pointer;

  i {
    margin-right: ${({ theme }) => theme.spacingUnit}px;
  }

  &:hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary : theme.colors.grey[20]};
  }

  &:active {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.primary : theme.colors.grey[30]};
  }
`;
