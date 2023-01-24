import React from "react";
import { useNavigate } from "react-router-dom";
import SideNavigation from "../styled-components-website/SideNavigation";
import NavigationHeader from "../styled-components-website/NavigationHeader";
import NavigationItems from "./NavigationItems";

const Navigation = () => {
  const navigate = useNavigate();

  const onWelcomePageNavigate = () => {
    navigate("/");
  };

  return (
    <SideNavigation>
      <NavigationHeader onClick={onWelcomePageNavigate}>
        UI Mania
      </NavigationHeader>
      <NavigationItems />
    </SideNavigation>
  );
};

export default Navigation;
