import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import { Mood } from "@material-ui/icons";
import Typography from "@mui/material/Typography";
import styledComp from "styled-components";
import { MenuList, MenuItem } from "../MenuList";

const drawerWidth = 400;

export interface SideMenuItem extends MenuItem {
  hasAlert: boolean;
  icon?: string | null;
}

const MenuListWrapper = styledComp.div`
  overflow: auto;
  margin-right: 10px;
`;

const DrawerHeader = styledComp.div`
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
 
`;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width"),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width"),
  width: 50,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== "open",
})(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface Props {
  open?: boolean;
  data: SideMenuItem[];
  selected: SideMenuItem;
  onClick: any;
  onItemSelected: Function;
}

export function SideMenu(props: Props) {
  const { data, open, selected, onClick, onItemSelected } = props;

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={onClick}>
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <MenuListWrapper>
        <MenuList
          data={data}
          selected={selected}
          onItemSelected={onItemSelected}
          renderItem={(item: SideMenuItem) => {
            const { hasAlert, icon, title } = item;
            return (
              <>
                <Badge
                  badgeContent={hasAlert || 0}
                  color="primary"
                  variant="dot"
                  overlap="circular"
                >
                  {/* {icon && <Icon>{icon}</Icon>} */}
                  {icon && <Mood />}
                </Badge>
                <Typography
                  variant="h6"
                  component="div"
                  style={{ paddingLeft: 20 }}
                >
                  {title}
                </Typography>
              </>
            );
          }}
        />
      </MenuListWrapper>
    </Drawer>
  );
}
