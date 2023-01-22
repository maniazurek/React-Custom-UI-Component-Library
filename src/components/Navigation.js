import React from "react";
import styled from "styled-components";
import NavigationItems from "./NavigationItems";

const Navigation = () => {
  return (
    <SideNavigation>
      <MainHeader>UI Mania</MainHeader>
      <NavigationItems />
    </SideNavigation>
  );
};

const MainHeader = styled.h1`
  color: #fff;
  font-size: 40px;
`;

const SideNavigation = styled.nav`
  width: 192px;
  height: 100%;
  background-color: #8fb593;
  position: fixed;
  top: 0;
  left: 0;
  padding: 24px;
`;

export default Navigation;
