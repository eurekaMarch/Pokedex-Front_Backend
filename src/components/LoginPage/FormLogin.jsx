import styled from "styled-components";
import { Image } from "antd";
import PokeTitle from "../../assets/images/pokedex.png";
import Search from "../SearchPage/Search";
import Button from "../Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  border-radius: 0;
  font-size: 1rem;
  font-weight: 400;
  padding: 0 10px;
  height: 3rem;
  min-width: 7rem;
  margin-bottom: 0.5rem;
`;

const Link = styled.span`
  color: blue;
  cursor: pointer;
`;

function FormLogin(values) {
  const { onSetStagePage } = values;

  return (
    <Wrapper>
      <Image width={200} src={PokeTitle} />
      <Search label="username" placeholder="username" />
      <Search label="password" placeholder="password" />
      <StyledButton>LOGIN</StyledButton>
      <div>
        not a member?{" "}
        <Link onClick={() => onSetStagePage("register")}>Register Now</Link>
      </div>
    </Wrapper>
  );
}

export default FormLogin;
