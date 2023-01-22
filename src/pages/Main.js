import React from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Accordion from "../components/Accordion";
import Navigation from "../components/Navigation";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/accordion" element={<Accordion />} />
      </Routes>
      <Outlet />
      <Navigation />
    </>
  );
};

export default Main;
