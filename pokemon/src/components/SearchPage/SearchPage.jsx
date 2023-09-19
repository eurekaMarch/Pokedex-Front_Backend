import { useState, useEffect } from "react";
import { Image, Col, Row, Spin } from "antd";
import PokeTitle from "../../assets/images/pokedex.png";
import styled from "styled-components";
import FilterDropdown from "./FilterDropdown";
import {
  regions,
  types,
  sortby,
  filterBySearch,
  filterByType,
  sortingBy,
} from "./helper";
import Search from "./Search";
import PokemonCard from "./PokemonCard";
import { pokemonApiV2, pokemonUser } from "../../utils/Axios";
import { filter } from "lodash";
import useToken from "../../utils/Token";
// import { pokemonInfo } from "../../utils/pokemonInfo";

const Container = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const HeaderContainer = styled.div`
  position: relative;
`;
const RightMenu = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  display: flex;
  gap: 10px;
`;

const Link = styled.span`
  color: gray;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const StyledRow = styled(Row)`
  max-width: 1000px;
  margin: auto;
  margin-top: 2rem;
  padding: 2rem;
  font-size: 1rem;
`;

const StyledCol = styled(Col)`
  font-size: 1rem;
`;

const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

const regionDropdownItems = regions.map((r) => {
  return {
    ...r,
    key: r?.name,
    value: r?.name,
    label: `${r?.name} (${r?.offset} - ${r?.limit + r?.offset})`,
  };
});

const typeDropdownItems = types.map((t) => {
  return {
    key: t,
    value: t,
    label: t,
  };
});

const sortbyDropdownItems = sortby.map((s) => {
  return {
    key: s,
    value: s,
    label: s,
  };
});

const getQueryString = (region) => {
  if (!region) return null;

  let query = new URLSearchParams();

  query.append("limit", region?.limit);
  query.append("offset", region?.offset);

  return query.toString();
};

const getPokemonLists = (pokemons = [], filters = {}) => {
  const { search, type, sortBy } = filters;

  const pokemonLists = filter(pokemons, (pokemon) => {
    //filter ของ lodash
    let remove = false;

    if (search && !filterBySearch(pokemon, search)) {
      remove = true;
    }

    if (
      type &&
      type?.value !== "all types" &&
      !filterByType(pokemon, type?.value)
    ) {
      remove = true;
    }

    return !remove;
  });

  const sortedPokemonList = pokemonLists.sort(sortingBy(sortBy?.value));

  const result = sortedPokemonList.map((pokemon) => {
    return {
      ...pokemon,
      image: pokemon?.sprites?.other?.dream_world?.front_default,
    };
  });

  return result;
};

const initial = {
  data: [],
  loading: false,
  error: null,
};

function SearchPage(prop) {
  const { clearToken, user, saveToken } = prop;
  const [filterS, setFilterS] = useState({});
  const [state, setState] = useState(initial);
  const { token } = useToken();

  const onFilterChange = (key, value) => {
    setFilterS((prevFilter) => {
      return {
        ...prevFilter,
        [key]: value,
      };
    });
  };

  const queryString = getQueryString(filterS.region);
  const pokemonLists = getPokemonLists(state?.data, filterS);

  const fetchPokemonList = async () => {
    if (!queryString) return;

    let pokemonList = [];
    let fetchError = null;

    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    try {
      const response = await pokemonApiV2.get(`pokemon?${queryString}`);
      const pokemonResults = response?.data?.results || [];

      for (let pokemon of pokemonResults) {
        const response = await pokemonApiV2.get(`pokemon/${pokemon?.name}`);
        const monster = await response?.data;
        await pokemonList.push({ ...monster, score: 0 });
      }
    } catch (error) {
      fetchError = error;
    }

    try {
      const response = await pokemonUser.get(`pokemon/score/all`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

      if (response?.data?.data) {
        const pokemonResults = response?.data?.data || [];
        saveToken(response.data.token);

        pokemonResults.forEach((item) => {
          let indexTarget = pokemonList.findIndex(
            (el) => el.id == item.pokemon_id
          );
          pokemonList[indexTarget] = {
            ...pokemonList[indexTarget],
            score: item.score,
          };
        });
        console.log(pokemonList);
      }
    } catch (error) {
      fetchError = error;
    }

    setState((prev) => ({
      ...prev,
      loading: false,
      data: pokemonList,
      error: fetchError,
    }));
  };

  const onVote = async (id) => {
    let data = {
      item: [
        {
          id: id,
        },
      ],
    };
    const response = await pokemonUser.post(`pokemon/vote`, data, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    console.log("response", response);
    if (response.data.success) {
      fetchPokemonList();
      saveToken(response.data.token);
    }
  };

  useEffect(() => {
    queryString && fetchPokemonList();
  }, [queryString]);

  return (
    <Container>
      <HeaderContainer>
        <Image width={200} src={PokeTitle} />
        <RightMenu>
          <div>{user.firstName}</div>
          <Link onClick={clearToken}>logout</Link>
        </RightMenu>
      </HeaderContainer>

      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="REGION"
            items={regionDropdownItems}
            onChange={(item) => onFilterChange("region", item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="TYPE"
            items={typeDropdownItems}
            onChange={(item) => onFilterChange("type", item)}
          />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown
            label="SORT BY"
            items={sortbyDropdownItems}
            onChange={(item) => onFilterChange("sortBy", item)}
          />
        </Col>
        <StyledCol xs={24} sm={12} md={6}>
          <Search
            label="SEARCH"
            placeholder="TYPING . . ."
            onChange={(v) => onFilterChange("search", v)}
          />
        </StyledCol>
      </StyledRow>
      <PokemonContainer>
        {state.loading ? (
          <Spin />
        ) : (
          [...pokemonLists].map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon?.id}
                pokemon={pokemon}
                onvote={onVote}
              />
            );
          })
        )}
      </PokemonContainer>
      {/* <PokemonContainer>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => {
          return <PokemonCard key={x} pokemon={pokemonInfo} />;
        })}
      </PokemonContainer> */}
    </Container>
  );
}

export default SearchPage;

// const StyledButton = styled(Button)`
//   background-color: ${({ bgColor }) => bgColor || "orange"};

//   background-color: ${(props) => {
//     return props.bgColor;

//   border-radius: 12px;
//   font-size: 1.5rem;
//   font-weight: 400;
//   line-height: 1.6;
// `;

{
  /* <StyledButton type="primary" bgColor="red">
Click me
</StyledButton> */
}
