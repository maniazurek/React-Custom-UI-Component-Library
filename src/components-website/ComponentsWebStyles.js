import styled from "styled-components";

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

export const NavigationItem = styled.h3`
  color: #fff;
  font-size: 15px;
  margin: 0px;
  padding: 10px;
  &:hover,
  &:focus {
    border-radius: 10px;
    color: #8fb593;
    background-color: #fff;
  }
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