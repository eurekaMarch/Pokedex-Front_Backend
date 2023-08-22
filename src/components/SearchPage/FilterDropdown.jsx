import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;

  .dropdown-wrapper {
    margin-top: 1rem;
  }
`;

const StyledSpan = styled.span`
    margin-top: 0;
  }
`;

function FilterDropdown(values) {
  const { label, items } = values;
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const onItemSelect = ({ item }) => {
    setSelectedItem(item);
  };

  return (
    <StyledDiv>
      <StyledSpan>{label}</StyledSpan>
      <div className="dropdown-wrapper">
        <DropdownMenu
          data={selectedItem}
          items={items}
          onItemSelect={onItemSelect}
        />
      </div>
    </StyledDiv>
  );
}

export default FilterDropdown;
