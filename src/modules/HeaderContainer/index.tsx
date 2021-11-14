import AppIcon from "@material-ui/icons/Shop";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header";
import { appName } from "../../constant";
import UserMenu from "../UserContainer";

function HeaderContainer() {
  const open = useSelector((state: any) => state.sideMenu.open);

  return (
    <Header
      appIcon={<AppIcon />}
      title={appName}
      open={open}
      rightChildren={[<UserMenu />]}
    ></Header>
  );
}

export default HeaderContainer;
