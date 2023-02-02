import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationItem } from "./ComponentsWebStyles";

const NavigationItems = () => {
  return (
    <>
      <NavLink to="/accordion">
        <NavigationItem>Accordion</NavigationItem>
      </NavLink>
      <NavLink to="/button">
        <NavigationItem>Button</NavigationItem>
      </NavLink>
      <NavLink to="/checkbox">
        <NavigationItem>Checkbox</NavigationItem>
      </NavLink>
      <NavLink to="/rating">
        <NavigationItem>Rating</NavigationItem>
      </NavLink>
      <NavLink to="/selectbox">
        <NavigationItem>Select Box</NavigationItem>
      </NavLink>
      <NavLink to="/swiper">
        <NavigationItem>Swiper</NavigationItem>
      </NavLink>
      <NavLink to="/switchbutton">
        <NavigationItem>Switch Button</NavigationItem>
      </NavLink>
      <NavLink to="/tagselectbox">
        <NavigationItem>Tag Select Box</NavigationItem>
      </NavLink>
      <NavLink to="/transferlist">
        <NavigationItem>Transfer List</NavigationItem>
      </NavLink>
    </>
  );
};

export default NavigationItems;
