import { styled } from "styled-components";

export const PagingContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 40px;

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
      border: 1px solid var(--gray200);
      border-radius: 40px;
      font-size: 16px;
      font-weight: 600;
      line-height: 26px;
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
      color: var(--gray50);
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--gray500);
    }
  }
`;
