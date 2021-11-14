import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SideMenu, SideMenuItem } from "../../components/SideMenu";
import { getSideMenuData, setSideMenuOpen, selectMenuItem } from "./actions";

export default function SideMenuContainer() {
  const dispatch = useDispatch();

  const sideMenu = useSelector((state: any) => state.sideMenu);
  const { data, open, selected } = sideMenu;

  useEffect(() => {
    dispatch(getSideMenuData());
  }, [dispatch]);

  const toggleDrawer = () => {
    dispatch(setSideMenuOpen(!open));
  };

  return (
    <SideMenu
      open={open}
      data={data}
      selected={selected}
      onItemSelected={(item: SideMenuItem) => {
        dispatch(selectMenuItem(item));
      }}
      onClick={toggleDrawer}
    />
  );
}
