import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

function FilterDropdown(value) {
  const { label, items } = value;

  return (
    <StyledDiv>
      <text>{label}</text>
      <div>
        <DropdownMenu items={items} />
      </div>
    </StyledDiv>
  );
}

export default FilterDropdown;
