import { Dropdown as DropdownAntd, Space } from "antd";
import styled from "styled-components";
import Button from "../Button";

const StyledA = styled.a`
  font-size: 1.2rem;
`;

const items = [
  {
    key: "1",
    label: (
      <StyledA
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </StyledA>
    ),
  },
  {
    key: "2",
    label: (
      <StyledA
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </StyledA>
    ),
  },
  {
    key: "3",
    label: (
      <StyledA
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </StyledA>
    ),
  },
];

function Dropdown() {
  return (
    <Space direction="vertical">
      <Space wrap>
        <DropdownAntd
          menu={{
            items,
          }}
          placement="bottom"
        >
          <Button>SELECT</Button>
        </DropdownAntd>
      </Space>
    </Space>
  );
}

export default Dropdown;
