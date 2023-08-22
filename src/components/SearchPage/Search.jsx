import Input from "./Input";
import { useState } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  .search-wrapper {
    margin-top: 1rem;
  }
`;

const StyledSpan = styled.span`
    margin-top: 0.5rem;
    margin-bottom: -0.1rem
  }
`;

function Search(prop) {
  const { label, placeholder, onChange } = prop;
  const [value, setValue] = useState("");

  const onSeachChange = (value) => {
    setValue(value);
    onChange?.(value);
  };

  return (
    <StyledDiv>
      <StyledSpan>{label}</StyledSpan>
      <div className="search-wrapper">
        <Input
          placeholder={placeholder}
          onSeachChange={onSeachChange}
          value={value}
        />
      </div>
    </StyledDiv>
  );
}

export default Search;
