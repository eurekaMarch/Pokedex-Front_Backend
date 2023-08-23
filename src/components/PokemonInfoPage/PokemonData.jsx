import styled from "styled-components";
import { Col, Row } from "antd";

const DataWrapper = styled.div`
  padding: 1rem;

  span {
    font-size: 1rem;
  }
`;

const Content = styled.div`
  font-size: 0.8rem;
  background-color: #ffffff40;
  border-radius: 1.2rem;
  padding: 1rem;
  line-height: 2.5;
`;

const StyledCol = styled(Col)`
  font-size: 0.8rem;
`;

function PokemonData(prop) {
  const { pokemon } = prop;
  return (
    <DataWrapper>
      <span>About</span>
      <div>
        <Content>{pokemon?.flavor_text_entries[0].flavor_text_entries}</Content>
      </div>
      <span>Abilities</span>
      <Content>
        {pokemon?.abilities.map(({ ability }) => {
          return (
            <div key={ability?.name}>
              <div>- {ability?.name}</div>
            </div>
          );
        })}
      </Content>
      <span>Base Stats</span>
      <Content>
        <Row>
          {pokemon?.stats.map(({ base_stat, stat }, index) => {
            return (
              <StyledCol key={index} xs={12} sm={12}>
                <div>
                  {stat?.name} - {base_stat}
                </div>
              </StyledCol>
            );
          })}
        </Row>
      </Content>
    </DataWrapper>
  );
}

export default PokemonData;
