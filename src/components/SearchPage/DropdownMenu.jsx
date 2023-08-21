import { Dropdown as DropdownAntd, Space } from "antd";
import Button from "../Button";
import { DownOutlined } from "@ant-design/icons";

// const items = [
//   {
//     key: "1",
//     label: (
//       <StyledA
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.antgroup.com"
//       >
//         1st menu item
//       </StyledA>
//     ),
//   },
//   {
//     key: "2",
//     label: (
//       <StyledA
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.aliyun.com"
//       >
//         2nd menu item
//       </StyledA>
//     ),
//   },
//   {
//     key: "3",
//     label: (
//       <StyledA
//         target="_blank"
//         rel="noopener noreferrer"
//         href="https://www.luohanacademy.com"
//       >
//         3rd menu item
//       </StyledA>
//     ),
//   },
// ];

function DropdownMenu(value) {
  const { items } = value;

  return (
    <Space direction="vertical">
      <Space wrap>
        <DropdownAntd
          menu={{
            items,
          }}
          placement="bottom"
        >
          <Button>
            SELECT
            <DownOutlined />
          </Button>
        </DropdownAntd>
      </Space>
    </Space>
  );
}

export default DropdownMenu;
