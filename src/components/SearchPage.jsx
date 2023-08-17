import { Button, Image } from "antd";
import PokeTitle from "../assets/images/pokedex.png";
import styled from "styled-components";

// background-color: ${(props) => {
//     return props.bgColor;
//   }};

const StyledButton = styled(Button)`
  background-color: ${({ bgColor }) => bgColor || "orange"};
  border-radius: 12px;
`;
function SearchPage() {
  return (
    <div>
      <Image width={200} src={PokeTitle} />
      <StyledButton type="primary" bgColor="red">
        Click me
      </StyledButton>
    </div>
  );
}

export default SearchPage;
