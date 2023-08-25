import { useSearchParams } from "react-router-dom";
import { Col, Row, Card } from "antd";
import styled from "styled-components";
import { getCardColorsByPokemonTypes } from "../../utils/pokemon";
import { pokemonInfo } from "../../utils/pokemonInfo";
import PokemonInfor from "./PokemonInfor";
import PokemonData from "./PokemonData";
import { BackwardFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  align-items: center;
`;

const StyledCard = styled(Card)`
  width: 80%;
  max-width: 80rem;
  border-radius: 1rem;
  padding: 0;
  background: ${({ bgcolor }) =>
    `linear-gradient(${bgcolor[0]}, ${bgcolor[1]})`};

  .ant-card-body {
    padding: 0;
  }
`;

const StyledBackward = styled(BackwardFilled)`
  font-size: 3rem;
`;

const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledCol1 = styled(Col)`
  display: flex;
  justify-content: center;
`;
const StyledCol2 = styled(Col)`
  padding: 0 1rem 1rem;
`;

function PokemonInfoPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const bgColors = getCardColorsByPokemonTypes(pokemonInfo?.types);

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <Wrapper>
      <StyledCard bgcolor={bgColors} hoverable>
        <StyledBackward onClick={goBack} />
        <StyledRow>
          <StyledCol1 xs={24} sm={12} md={8}>
            <PokemonInfor pokemon={pokemonInfo} />
          </StyledCol1>
          <StyledCol2 xs={24} sm={12} md={16}>
            <PokemonData pokemon={pokemonInfo} />
          </StyledCol2>
        </StyledRow>
      </StyledCard>
    </Wrapper>
  );
}

export default PokemonInfoPage;
