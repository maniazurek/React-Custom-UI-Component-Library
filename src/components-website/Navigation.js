import React from "react";
import { useNavigate } from "react-router-dom";
import { SideNavigation, NavigationHeader } from "./ComponentsWebStyles";
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
