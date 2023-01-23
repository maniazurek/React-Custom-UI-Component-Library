import React from "react";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Accordion from "../components/Accordion";
import Navigation from "../components/Navigation";
import TagInput from "../components/TagInput";
import SelectBox from "../components/SelectBox";

const Main = ({ optionsToSelect }) => {
  return (
    <>
      <Routes>
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/taginput" element={<TagInput />} />
        <Route
          path="/selectbox"
          element={
            <SelectBox
              optionsToSelect={optionsToSelect}
              placeholder="Choose your character"
            />
          }
        />
      </Routes>
      <Outlet />
      <Navigation />
    </>
  );
};

export default Main;
