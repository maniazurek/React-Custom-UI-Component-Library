import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Accordion from "../components-UI/Accordion/Accordion";
import Button from "../components-UI/Button/Button";
import Navigation from "../components-website/Navigation";
import SwitchButton from "../components-UI/SwitchButton/SwitchButton";
import SelectBox from "../components-UI/SelectBox/SelectBox";
import TagSelectBox from "../components-UI/TagSelectBox/TagSelectBox";
import TransferList from "../components-UI/TransferList/TransferList";
import Checkbox from "../components-UI/Checkbox/Checkbox";
import Rating from "../components-UI/Rating/Rating";
import Swiper from "../components-UI/Swiper/Swiper";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/accordion" element={<Accordion show="many" />} />
        <Route path="/button" element={<Button />} />
        <Route path="/checkbox" element={<Checkbox select="many" />} />
        <Route
          path="/rating"
          element={
            <Rating
              stars="5"
              poor="poor"
              ok="ok"
              good="good"
              verygood="very good"
              excellent="excellent"
            />
          }
        />
        <Route path="/selectbox" element={<SelectBox />} />
        <Route
          path="/swiper"
          element={
            <Swiper
              // mainPhotoPosition="right"
              // mainPhotoPosition="left"
              mainPhotoPosition="top"
              // mainPhotoPosition="bottom"
              // itemsColumns="1"
              // itemsColumns="2"
              // itemsColumns="3"
              itemsColumns="4"
            />
          }
        />
        <Route path="/switchbutton" element={<SwitchButton />} />
        <Route path="/tagselectbox" element={<TagSelectBox />} />
        <Route path="/transferlist" element={<TransferList />} />
      </Routes>
      <Outlet />
      <Navigation />
    </>
  );
};

export default Main;
