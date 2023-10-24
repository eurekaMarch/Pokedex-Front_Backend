import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Col, Row, Card, Spin } from "antd";
import styled from "styled-components";
import { getCardColorsByPokemonTypes } from "../../utils/pokemon";
import PokemonInfor from "./PokemonInfor";
import PokemonData from "./PokemonData";
import { BackwardFilled } from "@ant-design/icons";
import { isEmpty } from "lodash";
import { pokemonApiV2 } from "../../utils/Axios";

const initial = {
  data: {},
  loading: false,
  error: null,
};

function PokemonInfoPage() {
  const [state, setState] = useState(initial);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fetchPokemon = async (id) => {
    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    let pokemon;
    let fetchError;

    try {
      const pokemonResponse = await pokemonApiV2.get(`pokemon/${id}`);
      const speciesResposne = await pokemonApiV2.get(`pokemon-species/${id}`);

      pokemon = await pokemonResponse?.data;
      let species = await speciesResposne?.data;

      pokemon = {
        ...pokemon,
        image: pokemon?.sprites?.other?.dream_world?.front_default,
        about: species?.flavor_text_entries?.[0]?.flavor_text,
      };
    } catch (error) {
      fetchError = error;
    }

    setState((prev) => ({
      ...prev,
      data: pokemon,
      loading: false,
      error: fetchError,
    }));
  };

  useEffect(() => {
    id && fetchPokemon(id);
  }, [id]);

  if (!state.data || isEmpty(state.data)) return;

  const bgColors = getCardColorsByPokemonTypes(state.data.types);

  const goBack = () => {
    navigate("/", { replace: true });
  };

  return (
    <Wrapper>
      <StyledCard bgcolor={bgColors} hoverable>
        {state.loading ? (
          <Spin />
        ) : (
          <div>
            <StyledBackward onClick={goBack} />
            <StyledRow>
              <StyledCol1 xs={24} sm={12} md={9}>
                <PokemonInfor pokemon={state.data} />
              </StyledCol1>
              <StyledCol2 xs={24} sm={12} md={15}>
                <PokemonData pokemon={state.data} />
              </StyledCol2>
            </StyledRow>
          </div>
        )}
      </StyledCard>
    </Wrapper>
  );
}

export default PokemonInfoPage;

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
