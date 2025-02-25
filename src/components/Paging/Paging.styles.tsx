import { styled } from "styled-components";
import theme from "../../styles/theme";

export const PagingContainer = styled.div`
  width: 100%;
  display: flex;

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 0;
    margin: auto;

    li {
      width: 40px;
      height: 40px;
      border: 1px solid ${theme.color.gray200};
      border-radius: 40px;
      font: ${theme.font.H5Regular};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      user-select: none;

      &.active {
        background-color: #2f80ed;
      }
      &:first-child,
      &:last-child {
        display: none;
      }
    }

    li.active a {
      color: ${theme.color.gray50};
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.color.gray500};
    }
  }
`;
