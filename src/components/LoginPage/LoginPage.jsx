import { useState } from "react";
import { Image } from "antd";
import PokeTitle from "../../assets/images/pokedex.png";
import styled from "styled-components";
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
  min-width: 2rem;
  margin-bottom: 0.5rem;
`;

const Link = styled.span`
  color: blue;
  cursor: pointer;
`;

function LoginPage() {
  const [state, setState] = useState("login");

  const onSetStagePage = (page) => {
    setState(page);
  };

  return (
    <div>
      {state === "login" && (
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
      )}

      {state === "register" && (
        <Wrapper>
          <Image width={200} src={PokeTitle} />
          <Search label="first name" placeholder="firstname" />
          <Search label="last name" placeholder="lastname" />
          <Search label="username" placeholder="username" />
          <Search label="password" placeholder="password" />
          <StyledButton>REGISTER</StyledButton>
          <div>
            Have a member?{" "}
            <Link onClick={() => onSetStagePage("login")}>Login Now</Link>
          </div>
        </Wrapper>
      )}
    </div>
  );
}

export default LoginPage;
