import styled from "styled-components";

export const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  line-height: 32px;
  text-align: left;
  color: var(--gray900);
  margin: 0;
  margin-bottom: 16px;
`;

export const ItemCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
`;
