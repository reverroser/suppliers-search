import styled from "styled-components";

export const SupplierCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacingUnit * 3}px;
  border: thin solid ${({ theme }) => theme.colors.grey[20]};
  border-radius: ${({ theme }) => theme.spacingUnit * 2}px;
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  cursor: pointer;
  transition: 0.2s all linear;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.defaultHover};
  }

  &:active {
    box-shadow: ${({ theme }) => theme.boxShadow.defaultActive};
  }
`;

export const SupplierCardTitle = styled.h2`
  margin-bottom: 0;
`;

export const SupplierCardCategory = styled.p`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacingUnit}px;
  margin-bottom: 0;
  font-size: 16px;

  i {
    margin-right: ${({ theme }) => theme.spacingUnit * 0.5}px;
  }
`;

export const SupplierCardImage = styled.div`
  width: 100%;
  height: 260px;
  background-color: ${({ theme }) => theme.colors.grey[20]};
  background-image: ${({ image }) => `url(${image})`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: ${({ theme }) => theme.spacingUnit * 2}px;
`;
