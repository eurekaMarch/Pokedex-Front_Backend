import { useState } from "react";
import {
  useNavigate,
  // Link,
} from "react-router-dom";
import { InfoCircleFilled, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";

const StyledIcon = styled(HeartFilled)`
  margin: 0 0.3rem 0 0;
`;

function Icon(prop) {
  const { pokemon } = prop;

  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const handleOnchangeColor = () => {
    setActive(!active);
  };

  const handleOnChangePage = () => {
    // can go back page
    // navigate(`/pokemon?id=${pokemon.id}`);

    // don't go back page
    navigate(`/pokemon?id=${pokemon.id}`, { replace: true });
  };

  return (
    <div>
      <StyledIcon
        onClick={handleOnchangeColor}
        style={{ color: active ? "#da7589" : "currentColor" }}
      />
      <InfoCircleFilled onClick={handleOnChangePage} />

      {/* <Link to={`/pokemon?id=${pokemon.id}`}>
        <InfoCircleFilled style={{ color: "rgba(0, 0, 0, 0.88)" }} />
      </Link> */}
    </div>
  );
}

export default Icon;
