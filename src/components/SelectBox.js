import Select from "react-select";
import SelectImg from "../assets/btn_sort.svg";
import useWindowSize from "../hooks/useWindowSize";
import styled from "styled-components";

//
const CustomSelectWrapper = styled.div`
  width: ${({ device }) => (device !== "mobile" ? "130px" : "42px")};
  height: 42px;
  order: ${({ device }) => (device === "mobile" ? 3 : 4)};
  padding: "0px 0px";
  border-radius: 12px;
`;
const customStyles = () => ({
  control: (styles) => ({
    ...styles,
    padding: "0px 0px",
    width: `${({ device }) => (device !== "mobile" ? "130px" : "42px")}`,
    backgroundColor: "#ffffff",
    border: "none",
  }),
  valueContainer: (styles) => ({
    ...styles,
    width: "100%",
    padding: "0px 0px",
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    display: "none",
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: "14px",
    padding: "0px 0px",
  }),
  option: (styles) => ({
    ...styles,
    backgroundColor: "#ffffff",
    color: "#1F2937",
    width: "130px",
    padding: "0px 0px",
  }),
  placeholder: (styles) => ({
    ...styles,
    textAlign: "center",
    padding: "0px 0px",
    backgroundImage: `url(${SelectImg}) no-repeat center/cover`,
  }),
});

const options = [
  { value: "recent", label: "최신순" },

  { value: "favorite", label: "좋아요" },
];
function SelectBox({ value, onChange }) {
  const device = useWindowSize();

  return (
    <CustomSelectWrapper device={device}>
      <Select
        components={{ DropdownIndicator: () => null }}
        value={value}
        onChange={onChange}
        styles={customStyles}
        options={options}
        isSearchable={false}
        placeholder={
          device !== "mobile" ? value : <img src={SelectImg} alt="정렬" />
        }
      ></Select>
    </CustomSelectWrapper>
  );
}
export default SelectBox;
