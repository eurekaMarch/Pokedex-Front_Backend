import styled from "styled-components";
import { getHeight, getWeight } from "../../utils/pokemon";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border-radius: 1.2rem;
  font-size: 1rem;
  line-height: 2;

  p {
    line-height: 1;
    font-size: 0.9rem;
  }
`;

const StyledImage = styled.div`
  padding: 2rem;
  max-width: 20rem;
`;

function PokemonInfor(prop) {
  const { pokemon } = prop;

  return (
    <InfoWrapper>
      <div>#{pokemon?.id}</div>
      <div>Name: {pokemon?.name}</div>

      <StyledImage>
        <img src={pokemon?.image} width="100%" height="130rem" />
      </StyledImage>

      <p>Height: {getHeight(pokemon?.height)}</p>
      <p>Weight: {getWeight(pokemon?.weight)}</p>
    </InfoWrapper>
  );
}

export default PokemonInfor;
