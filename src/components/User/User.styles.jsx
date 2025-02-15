import styled from "styled-components";
import theme from "../../styles/theme";

export const User = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${({ $detail }) => ($detail ? "16px" : "8px")};
`;

export const Profile = styled.img`
  width: ${({ $detail }) => ($detail ? "40px" : "32px")};
  height: ${({ $detail }) => ($detail ? "40px" : "32px")};
  border-radius: 100px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Name = styled.div`
  font: ${({ $detail }) =>
    $detail ? `${theme.font.H7Regular}` : `${theme.font.H8}`};
  color: ${theme.color.gray600};
`;

export const CreatedAt = styled.div`
  font: ${({ $detail }) =>
    $detail ? `${theme.font.H7Regular}` : `${theme.font.H8}`};
  color: ${theme.color.gray400};
`;
