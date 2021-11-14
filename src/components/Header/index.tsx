import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import styledComp from "styled-components";

interface Props {
  appIcon?: React.ReactElement;
  title?: string;
  rightChildren?: null | Array<React.ReactElement>;
  open: boolean;
}
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 400;

const RightSection = styledComp.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex: 1;
`;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["width", "margin"]),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth - 50}px)`,
    transition: theme.transitions.create(["width", "margin"]),
  }),
}));

const Header = (props: Props) => {
  const { appIcon, title, rightChildren, open } = props;
  return (
    <AppBar
      position="fixed"
      open={open}
      color="inherit"
      style={{ boxShadow: "none", borderBottom: "1px solid gray" }}
    >
      <Toolbar style={{ marginLeft: 30 }}>
        {appIcon}
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
        <RightSection>{rightChildren}</RightSection>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
