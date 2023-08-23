import styled from "styled-components";
import { getHeight, getWeight } from "../../utils/pokemon";
import { BackwardFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 1.2rem;
  font-size: 0.8rem;
  width: 30rem;
`;

const StyledBackward = styled(BackwardFilled)`
  position: absolute;
  top: -2rem;
  left: 1rem;
  font-size: 3rem;
`;

const StyledImage = styled.div`
  padding: 2rem;
  max-width: 20rem;
`;

function PokemonInfor(prop) {
  const { pokemon } = prop;

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <InfoWrapper>
      <StyledBackward onClick={goBack} />
      <span>#{pokemon?.id}</span>
      <span>Name: {pokemon?.name}</span>
      <StyledImage>
        <img src={pokemon?.images} width="100%" />
      </StyledImage>
      <span>Height: {getHeight(pokemon?.height)}</span>
      <span>Weight: {getWeight(pokemon?.weight)}</span>
    </InfoWrapper>
  );
}

export default PokemonInfor;
