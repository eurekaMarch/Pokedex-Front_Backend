import { Image, Col, Row } from "antd";
import PokeTitle from "../../assets/images/pokedex.png";
import styled from "styled-components";
import FilterDropdown from "./FilterDropdown";
import { regions, types, sortby } from "./helper";
import Search from "./Search";

const Container = styled.div`
  text-align: center;
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

function SearchPage() {
  const regionDropdownItems = regions.map((r) => {
    return {
      ...r,
      key: r.name,
      value: r.name,
      label: `${r.name} (${r.offset} - ${r.limit + r.offset})`,
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

  return (
    <Container>
      <Image width={200} src={PokeTitle} />

      <StyledRow>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label="REGION" items={regionDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label="TYPE" items={typeDropdownItems} />
        </Col>
        <Col xs={24} sm={12} md={6}>
          <FilterDropdown label="SORT BY" items={sortbyDropdownItems} />
        </Col>
        <StyledCol xs={24} sm={12} md={6}>
          <Search label="SEARCH" placeholder="TYPING" />
        </StyledCol>
      </StyledRow>
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
