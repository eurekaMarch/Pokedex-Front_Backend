import { Input as InputAntd } from "antd";
import { styled } from "styled-components";

const StyledInput = styled(InputAntd)`
  font-size: 1rem;
  font-family: "barcadebrawl", sans-serif;
  font-weight: 400;
  height: 3rem;
  width: 23rem;
  border-radius: 0;
`;

function Input(prop) {
  const { value, onSeachChange, placeholder } = prop;
  const handleOnInputChange = (e) => {
    const value = e.target.value;
    onSeachChange(value);
  };

  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={handleOnInputChange}
    />
  );
}

export default Input;
