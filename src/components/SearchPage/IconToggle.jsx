import { useState } from "react";
import Icon from "./Icon";
import styled from "styled-components";

const StyledIcon = styled(Icon)`
  svg {
    fill: ${({ active }) => (active ? "#da7589" : "currentColor")};
  }
`;
function IconToggle(prop) {
  const { name, margin, isColorChange = true, onClick } = prop;
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    isColorChange && setActive(!active);
    onClick?.();
  };
  return (
    <StyledIcon
      name={name}
      margin={margin}
      active={active}
      onClick={handleOnClick}
    />
  );
}

export default IconToggle;
