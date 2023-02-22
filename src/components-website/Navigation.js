import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SideNavigation, NavigationHeader } from "./ComponentsWebStyles";
import NavigationItems from "./NavigationItems";
import theme from "../components-UI/SwitchButton/reducers/theme";

const Navigation = () => {
  const navigate = useNavigate();
  const themeColor = useSelector((store) => store.theme.value);

  const onWelcomePageNavigate = () => {
    navigate("/");
  };

  return (
    <SideNavigation style={{ backgroundColor: themeColor }}>
      <NavigationHeader onClick={onWelcomePageNavigate}>
        UI Mania
      </NavigationHeader>
      <NavigationItems />
    </SideNavigation>
  );
};

export default Navigation;
