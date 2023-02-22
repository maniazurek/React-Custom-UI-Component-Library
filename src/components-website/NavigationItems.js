import React from "react";
import {
  NavLinkElement,
  NavigationItem,
  NavigationItemsContainer,
} from "./ComponentsWebStyles";
import styled from "styled-components";

const NavigationItems = () => {
  return (
    <NavigationItemsContainer>
      <NavLinkElement to="/accordion">
        <NavigationItem>Accordion</NavigationItem>
      </NavLinkElement>
      <NavLinkElement to="/button">
        <NavigationItem>Button</NavigationItem>
      </NavLinkElement>
      <NavLinkElement to="/checkbox">
        <NavigationItem>Checkbox</NavigationItem>
      </NavLinkElement>
      <NavLinkElement to="/rating">
        <NavigationItem>Rating</NavigationItem>
      </NavLinkElement>
      <NavLinkElement to="/selectbox">
        <NavigationItem>Select Box</NavigationItem>
      </NavLinkElement>
      <NavLinkElement to="/swiper">
        <NavigationItem>Swiper</NavigationItem>
      </NavLinkElement>
      <NavLinkElement to="/switchbutton">
        <NavigationItem>Switch Button</NavigationItem>
      </NavLinkElement>
      <NavLinkElement to="/tagselectbox">
        <NavigationItem>Tag Select Box</NavigationItem>
      </NavLinkElement>
      <NavLinkElement to="/transferlist">
        <NavigationItem>Transfer List</NavigationItem>
      </NavLinkElement>
    </NavigationItemsContainer>
  );
};

export default NavigationItems;
