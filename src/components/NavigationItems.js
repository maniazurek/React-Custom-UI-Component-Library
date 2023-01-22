import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationItems = () => {
  return (
    <>
      <NavLink to="/accordion">
        <Item>Accordion</Item>
      </NavLink>
      <NavLink to="/2">
        <Item>Second component</Item>
      </NavLink>
      <NavLink to="/3">
        <Item>Third component</Item>
      </NavLink>
    </>
  );
};

const Item = styled.h3`
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

export default NavigationItems;
