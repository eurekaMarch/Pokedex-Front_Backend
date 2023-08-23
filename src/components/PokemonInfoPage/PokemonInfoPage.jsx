import { useSearchParams } from "react-router-dom";
import { Col, Row } from "antd";
import styled from "styled-components";
import { getCardColorsByPokemonTypes } from "../../utils/pokemon";
import { pokemonInfo } from "../../utils/pokemonInfo";
import PokemonInfor from "./PokemonInfor";
import PokemonData from "./PokemonData";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

const StyledRow = styled(Row)`
  background: ${({ bgcolor }) =>
    `linear-gradient(${bgcolor[0]}, ${bgcolor[1]})`};
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  max-width: 80rem;
  padding-top: 2rem;
`;
const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

function PokemonInfoPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const bgColors = getCardColorsByPokemonTypes(pokemonInfo?.types);

  return (
    <Wrapper>
      <StyledRow bgcolor={bgColors}>
        <StyledCol xs={24} sm={12} md={8}>
          <PokemonInfor pokemon={pokemonInfo} />
        </StyledCol>
        <Col xs={24} sm={12} md={16}>
          <PokemonData pokemon={pokemonInfo} />
        </Col>
      </StyledRow>
    </Wrapper>
  );
}

export default PokemonInfoPage;
