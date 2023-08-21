import { Image, Col, Row } from "antd";
import PokeTitle from "../../assets/images/pokedex.png";
import styled from "styled-components";
import FilterDropdown from "./FilterDropdown";
import { regions } from "./helper";

const Container = styled.div`
  text-align: center;
`;

function SearchPage() {
  const regionDropdownItems = regions.map((r) => {
    return {
      ...r,
      key: r.name,
      value: r.name,
      label: `${r.name} (${r.offset} - ${r.limit + r.offset})`,
    };
  });

  return (
    <Container>
      <Image width={200} src={PokeTitle} />

      <Row>
        <Col>
          <FilterDropdown label="REGION" items={regionDropdownItems} />
        </Col>
      </Row>
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
