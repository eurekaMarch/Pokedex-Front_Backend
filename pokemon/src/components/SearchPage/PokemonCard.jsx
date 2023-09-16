import Icon from "./Icon";
import { Card } from "antd";
import styled from "styled-components";
import { getCardColorsByPokemonTypes } from "../../utils/pokemon";

const Container = styled.div`
  margin: 2rem;
`;

const StyledImage = styled.div`
  padding: 2rem;
`;

const StyledCard = styled(Card)`
  width: 26rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: ${({ bgcolor }) =>
    `linear-gradient(${bgcolor[0]}, ${bgcolor[1]})`};

  .ant-card-body {
    padding: 0;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
`;

const StyledSpan = styled.span`
  font-size: 1rem;
`;

function PokemonCard(value) {
  const { pokemon } = value;

  const bgColors = getCardColorsByPokemonTypes(pokemon?.types);

  return (
    <Container>
      <StyledCard bgcolor={bgColors} hoverable>
        <StyledHeader>
          <span>#{pokemon?.id}</span>
          <Icon pokemon={pokemon} />
        </StyledHeader>
        <StyledImage>
          <img src={pokemon?.image} width={"100%"} height={"162rem"} />
        </StyledImage>
        <StyledSpan>{pokemon?.name}</StyledSpan>
      </StyledCard>
    </Container>
  );
}

export default PokemonCard;
