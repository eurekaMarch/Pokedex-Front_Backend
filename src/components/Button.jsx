import { Button as ButtonAntd } from "antd";
import styled from "styled-components";

const StyledButton = styled(ButtonAntd)`
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.6;
`;

function Button() {
  return <StyledButton width="100%">select</StyledButton>;
}

export default Button;
