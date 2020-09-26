import styled from "styled-components";

export const SuppliersGrid = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacingUnit * 5}px;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  width: 100%;
`;

export const SuppliersContainer = styled.div`
  padding: ${({ theme }) => theme.spacingUnit * 6}px
    ${({ theme }) => theme.spacingUnit * 10}px;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
    margin: ${({ theme }) => theme.spacingUnit * 10}px 0 0;

    .previous,
    .next {
      display: none;
    }

    li {
      opacity: 0.8;
      font-size: 18px;
      font-weight: 600;
      margin-right: ${({ theme }) => theme.spacingUnit}px;
      cursor: pointer;
      transition: 0.2s opacity linear;

      a {
        outline: none;
      }

      &.selected {
        color: ${({ theme }) => theme.colors.primary};
      }

      &:hover {
        opacity: 1;
      }
    }
  }
`;
