import { useState } from "react";
import styled from "styled-components";
import { Image } from "antd";
import PokeTitle from "../../assets/images/pokedex.png";
import Search from "../SearchPage/Search";
import SearchPassword from "./SearchPassword/SearchPassword";
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

function FormRegister(values) {
  const { onSetStagePage, onRegister, onClearError } = values;

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <Image width={200} src={PokeTitle} />
      <Search
        label="first name"
        placeholder="firstname"
        onChange={(v) => {
          setFirstname(v);
          onClearError();
        }}
      />
      <Search
        label="last name"
        placeholder="lastname"
        onChange={(v) => {
          setLastname(v);
          onClearError();
        }}
      />
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
        password="Password"
        onChange={(v) => {
          setPassword(v);
          onClearError();
        }}
      />
      <StyledButton
        onClick={() =>
          onRegister({
            firstName: firstname,
            lastName: lastname,
            userName: username,
            password,
          })
        }
      >
        REGISTER
      </StyledButton>
      <div>
        Have a member?{" "}
        <Link onClick={() => onSetStagePage("login")}>Login Now</Link>
      </div>
    </Wrapper>
  );
}

export default FormRegister;
