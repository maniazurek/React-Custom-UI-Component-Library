import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "../styled-components-website/NavigationItem";

const NavigationItems = () => {
  return (
    <>
      <NavLink to="/accordion">
        <NavigationItem>Accordion</NavigationItem>
      </NavLink>
      <NavLink to="/button">
        <NavigationItem>Button</NavigationItem>
      </NavLink>
      <NavLink to="/selectbox">
        <NavigationItem>Select Box</NavigationItem>
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
