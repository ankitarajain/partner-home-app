import { Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import { useCallback, useState } from "react";
import styled from "styled-components";

export type MenuItem = {
  id: string;
  title: string;
  children?: MenuItem[];
};

const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

interface Props {
  onItemSelected?: Function;
  renderItem?: Function;
  data: MenuItem[];
  selected?: MenuItem;
}

export const MenuList = (props: Props) => {
  const [menu, setMenu] = useState<{ [key: string]: boolean }>({});
  const { data, onItemSelected, selected, renderItem } = props;

  const handleClick = useCallback(
    (item: MenuItem, hasChildren: boolean) => {
      const newData = { ...menu, [item.title]: !menu[item.title] };
      setMenu(newData);
      if (onItemSelected && !hasChildren) {
        onItemSelected(item);
      }
    },
    [menu, setMenu, onItemSelected]
  );

  const renderListItem = (item: any, hasChildren: boolean) => {
    const { title, id } = item;
    return (
      <ListItem
        key={title}
        onClick={() => handleClick(item, hasChildren)}
        style={{
          color: selected && selected.id === id ? "purple" : "black",
        }}
      >
        {renderItem ? renderItem(item) : <ListItemText primary={title} />}
        {hasChildren && (
          <ArrowContainer>
            {menu[title] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </ArrowContainer>
        )}
      </ListItem>
    );
  };

  const handleMenu = (items: MenuItem[], level: number = 0) => {
    return items.map((item: MenuItem, index: number) => {
      const { id, title, children } = item;
      const key = `${id}_${title}_${index}`;
      const hasChildren = children && children.length > 0 ? true : false;
      return (
        <List key={key} component="div" style={{ marginLeft: 30 * level }}>
          {renderListItem(item, hasChildren)}
          {hasChildren && (
            <Collapse in={menu[item.title]} timeout="auto" unmountOnExit>
              {handleMenu(children || [], level + 1)}
            </Collapse>
          )}
        </List>
      );
    });
  };

  return <List>{handleMenu(data)}</List>;
};
