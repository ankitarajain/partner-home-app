import { useState } from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";

import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import { MenuList } from "../../components/MenuList";

function UserMenuContainer() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { info, options } = useSelector((state: any) => state.user);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography variant="h6" component="div">
        {info.name}
      </Typography>

      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuList data={options} />
      </Menu>
    </>
  );
}

export default UserMenuContainer;
