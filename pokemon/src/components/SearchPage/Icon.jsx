// import { useState } from "react";
import {
  useNavigate,
  // Link,
} from "react-router-dom";
import { InfoCircleFilled, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.4rem;
`;

const StyledIcon = styled(HeartFilled)`
  margin: 0 0.3rem 0 0;
`;

const Score = styled.span`
  margin-right: 1rem;
  margin-top: -0.19rem;
  font-size: 1rem;
`;

function Icon(prop) {
  const { pokemon, onvote } = prop;

  // const [active, setActive] = useState(false);

  const navigate = useNavigate();

  // const handleOnchangeColor = () => {
  //   setActive(!active);
  // };

  const handleOnChangePage = () => {
    // can go back page
    // navigate(`/pokemon?id=${pokemon.id}`);

    // don't go back page
    navigate(`/pokemon?id=${pokemon.id}`, { replace: true });
  };

  const checkScore = (score) => {
    return score >= 1000 ? `${score / 1000}K` : score;
  };

  return (
    <Container>
      <Score>{pokemon.score > 0 && checkScore(pokemon.score)}</Score>
      <StyledIcon
        onClick={() => onvote(pokemon.id)}
        style={{ color: pokemon.score > 0 ? "#da7589" : "currentColor" }}
      />
      <InfoCircleFilled onClick={handleOnChangePage} />
    </Container>
  );

  // return (
  //   <Container>
  //     <Score>{pokemon.score}</Score>
  //     <StyledIcon
  //       onClick={handleOnchangeColor}
  //       style={{ color: active ? "#da7589" : "currentColor" }}
  //     />
  //     <InfoCircleFilled onClick={handleOnChangePage} />

  //     {/* <Link to={`/pokemon?id=${pokemon.id}`}>
  //       <InfoCircleFilled style={{ color: "rgba(0, 0, 0, 0.88)" }} />
  //     </Link> */}
  //   </Container>
  // );
}

export default Icon;
