import styled from "styled-components";
import { getHeight, getWeight } from "../../utils/pokemon";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  border-radius: 1.2rem;
  font-size: 1rem;
  width: 30rem;

  p {
    font-size: 0.8rem;
    line-height: 1;
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
        <img src={pokemon?.images} width="100%" />
      </StyledImage>
      <p>Height: {getHeight(pokemon?.height)}</p>
      <p>Weight: {getWeight(pokemon?.weight)}</p>
    </InfoWrapper>
  );
}

export default PokemonInfor;
