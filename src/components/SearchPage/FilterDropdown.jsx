import DropdownMenu from "./DropdownMenu";
import { useState } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

function FilterDropdown(values) {
  const { label, items } = values;
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const onItemSelect = ({ item }) => {
    setSelectedItem(item);
  };

  return (
    <StyledDiv>
      <div>{label}</div>
      <div>
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
