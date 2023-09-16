import { Input as InputAntd } from "antd";
import { styled } from "styled-components";

const StyledInput = styled(InputAntd.Password)`
  font-size: 1rem;
  font-family: "barcadebrawl", sans-serif;
  font-weight: 400;
  height: 3rem;
  width: 23rem;
  border-radius: 0;

  .ant-input {
    font-family: "barcadebrawl", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  svg {
    font-size: 1.4rem;
  }
`;

function InputPassword(prop) {
  const { onSeachChange, placeholder } = prop;
  const handleOnInputChange = (e) => {
    const value = e.target.value;
    onSeachChange(value);
  };

  return (
    <StyledInput placeholder={placeholder} onChange={handleOnInputChange} />
  );
}

export default InputPassword;
