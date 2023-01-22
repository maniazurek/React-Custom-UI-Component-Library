import React from "react";
import SideNavigation from "../styled-components/SideNavigation";
import NavigationHeader from "../styled-components/NavigationHeader";
import NavigationItems from "./NavigationItems";

const Navigation = () => {
  return (
    <SideNavigation>
      <NavigationHeader>UI Mania</NavigationHeader>
      <NavigationItems />
    </SideNavigation>
  );
};

export default Navigation;
