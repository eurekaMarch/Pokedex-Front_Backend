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

const getTitle = (item) => {
  if (item.label) return item.label;
  if (item.value) return item.value;

  return "N/A";
};

function DropdownMenu(values) {
  const { items, data, onItemSelect } = values;
  const title = getTitle(data);

  const handleOnItemSelect = ({ key }) => {
    const selectedItemss = items.find((i) => i.key === key);

    onItemSelect({
      value: selectedItemss.value,
      key: key,
      item: selectedItemss,
    });
  };

  const menuProps = {
    items,
    onClick: handleOnItemSelect,
  };

  return (
    <Space direction="vertical">
      <Space wrap>
        <DropdownAntd menu={menuProps} placement="bottom">
          <Button>
            {title}
            <DownOutlined />
          </Button>
        </DropdownAntd>
      </Space>
    </Space>
  );
}

export default DropdownMenu;
