import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Accordion from "../components-UI/Accordion";
import Button from "../components-UI/Button";
import Navigation from "../components-website/Navigation";
import SwitchButton from "../components-UI/SwitchButton"

const Main = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/button" element={<Button />} />
        <Route path="/switchbutton" element={<SwitchButton />} />
      </Routes>
      <Outlet />
      <Navigation />
    </AnimatePresence>
  );
};

export default Main;
