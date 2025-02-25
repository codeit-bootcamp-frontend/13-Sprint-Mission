import styled from "styled-components";
import theme from "../../styles/theme";

export default function Input({ placeholder, value, onChange, ...props }) {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 24px;
  gap: 10px;
  border: none;
  border-radius: 12px;
  background-color: ${theme.colors.Gray100};
  font: ${theme.fonts.H5Regular};
`;
