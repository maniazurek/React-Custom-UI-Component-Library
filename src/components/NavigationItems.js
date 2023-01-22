import React from "react";
import { NavLink } from "react-router-dom";
import NavigationItem from "../styled-components/NavigationItem";

const NavigationItems = () => {
  return (
    <>
      <NavLink to="/accordion">
        <NavigationItem>Accordion</NavigationItem>
      </NavLink>
      <NavLink to="/2">
        <NavigationItem>Second component</NavigationItem>
      </NavLink>
      <NavLink to="/3">
        <NavigationItem>Third component</NavigationItem>
      </NavLink>
    </>
  );
};

export default NavigationItems;
