import { Image } from "antd";
import PokeTitle from "../../assets/images/pokedex.png";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const Container = styled.div`
  text-align: center;
`;

function SearchPage() {
  return (
    <Container>
      <Image width={200} src={PokeTitle} />
      <Dropdown />
    </Container>
  );
}

export default SearchPage;

// const StyledButton = styled(Button)`
//   background-color: ${({ bgColor }) => bgColor || "orange"};

//   background-color: ${(props) => {
//     return props.bgColor;

//   border-radius: 12px;
//   font-size: 1.5rem;
//   font-weight: 400;
//   line-height: 1.6;
// `;

{
  /* <StyledButton type="primary" bgColor="red">
Click me
</StyledButton> */
}
