import { useState } from "react";
import { InfoCircleFilled, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";

const StyledIcon = styled(HeartFilled)`
  margin: 0 0.3rem 0 0;
`;

function Icon() {
  const [activeChangeColor, setActiveChangeColor] = useState(false);
  const [activeChangePage, setActiveChangePage] = useState(false);

  const handleOnchangeColor = () => {
    setActiveChangeColor(!activeChangeColor);
    console.log("hi444");
  };
  const handleOnChangePage = () => {
    setActiveChangePage(!activeChangePage);
    console.log("hi555");
  };

  return (
    <div>
      <StyledIcon
        onClick={handleOnchangeColor}
        style={{ color: activeChangeColor ? "#da7589" : "currentColor" }}
      />
      <InfoCircleFilled onClick={handleOnChangePage} />
    </div>
  );
}

export default Icon;
