import { useState } from "react";
import styled from "styled-components";
import { Image } from "antd";
import PokeTitle from "../../assets/images/pokedex.png";
import Search from "../SearchPage/Search";
import Button from "../Button";
import SearchPassword from "./SearchPassword/SearchPassword";

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
  const { onSetStagePage, onClearError, onLogin } = values;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <Image width={200} src={PokeTitle} />
      <Search
        label="username"
        placeholder="username"
        onChange={(v) => {
          setUsername(v);
          onClearError();
        }}
      />
      <SearchPassword
        label="password"
        placeholder="password"
        onChange={(v) => {
          setPassword(v);
          onClearError();
        }}
      />
      <StyledButton
        onClick={() =>
          onLogin({
            userName: username,
            password,
          })
        }
      >
        LOGIN
      </StyledButton>
      <div>
        not a member?{" "}
        <Link onClick={() => onSetStagePage("register")}>Register Now</Link>
      </div>
    </Wrapper>
  );
}

export default FormLogin;
