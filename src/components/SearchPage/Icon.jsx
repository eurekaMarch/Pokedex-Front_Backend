import { useState } from "react";
import { InfoCircleFilled, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";

const StyledIcon = styled(HeartFilled)`
  margin: 0 0.3rem 0 0;
`;

function Icon() {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const toggle = () => {
    setActive(!active);
    console.log("hi444");
  };
  const toggle2 = () => {
    setActive2(!active2);
    console.log("hi555");
  };
  return (
    <div>
      <StyledIcon
        onClick={toggle}
        style={{ color: active ? "#da7589" : "currentColor" }}
      />
      <InfoCircleFilled onClick={toggle2} />
    </div>
  );
}

export default Icon;
