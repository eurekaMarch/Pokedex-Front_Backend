import { useState } from "react";
import { InfoCircleFilled, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";

const StyledIcon = styled(HeartFilled)`
  margin: 0 0.3rem 0 0;
`;

function Icon() {
  const [changeColor, setChangeColor] = useState(false);
  const [changePage, setChangePage] = useState(false);

  const handleOnchangeColor = () => {
    setChangeColor(!changeColor);
    console.log("hi444");
  };
  const handleOnChangePage = () => {
    setChangePage(!changePage);
    console.log("hi555");
  };

  return (
    <div>
      <StyledIcon
        onClick={handleOnchangeColor}
        style={{ color: changeColor ? "#da7589" : "currentColor" }}
      />
      <InfoCircleFilled onClick={handleOnChangePage} />
    </div>
  );
}

export default Icon;
