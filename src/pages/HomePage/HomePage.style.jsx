import styled from "styled-components";

export const Contents = styled.div`
  width: ${({ device }) =>
    device === "desktop" ? "1200px" : device === "tablet" ? "696px" : "344px"};
  margin: 70px auto;
`;
export const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SearchBtn = styled.button`
  height: 42px;
  padding: 12px 23px;
  border-radius: 8px;
  color: #f3f4f6;
  background-color: #3692ff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
  order: ${({ device }) => (device === "mobile" ? 1 : "auto")};
`;

export const InputForm = styled.input`
  width: ${({ device }) =>
    device === "desktop" ? "325px" : device === "tablet" ? "242px" : "288px"};
  height: 42px;
  padding: 9px 20px 9px 16px;
  border-radius: 12px;
  border: none;
  background-color: #f3f4f6;
  color: #9ca3af;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  order: ${({ device }) => (device === "mobile" ? 2 : "auto")};
  margin-left: ${({ device }) =>
    device === "desktop" ? "500px" : device === "tablet" ? "80px" : "0px"};
`;
