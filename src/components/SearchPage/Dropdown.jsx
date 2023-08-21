import { Dropdown as DropdownAntd, Space, Button } from "antd";

const mocMenu = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];

function Dropdown() {
  return (
    <Space direction="vertical">
      <Space wrap>
        <DropdownAntd
          menu={{
            mocMenu,
          }}
          placement="bottom"
        >
          <Button>bottom</Button>
        </DropdownAntd>
      </Space>
    </Space>
  );
}

export default Dropdown;
