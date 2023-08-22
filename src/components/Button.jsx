import { Button as ButtonAntd } from "antd";
import styled from "styled-components";

const Button = styled(ButtonAntd)`
  border-radius: 0;
  font-size: 1rem;
  font-weight: 400;
  padding: 0 10px;
  height: 3rem;
  min-width: 23rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Button;
