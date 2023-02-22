import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideNavigation = styled.nav`
  width: 192px;
  height: 100%;
  background-color: #8fb593;
  position: fixed;
  top: 0;
  left: 0;
  padding: 24px;
`;

export const NavigationHeader = styled.h1`
  color: #fff;
  font-size: 40px;
  cursor: pointer;
`;

export const NavigationItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const NavigationItem = styled.h3`
  color: #fff;
  font-size: 15px;
  margin: 0px;
  padding: 7px;
`;

export const SectionContainer = styled.div`
  margin-left: 240px;
  padding: 57.2px;
`;

export const SectionDescription = styled.p`
  font-size: 13px;
  margin-top: 0px;
  margin-bottom: 30px;
`;

export const SectionTitle = styled.p`
  font-size: 40px;
  margin-top: 0px;
  margin-bottom: 33.2px;
`;

export const NavLinkElement = styled(NavLink)`
  &:hover h3,
  &:focus h3,
  &.active h3 {
    border-radius: 10px;
    color: #8fb593;
    background-color: #fff;
  }
`;
