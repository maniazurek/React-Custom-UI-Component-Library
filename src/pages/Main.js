import React from "react";
import { Routes, Route } from "react-router-dom";
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
        <Route
          path="/accordion"
          element={
            <Accordion
              // show="many"
              show="single"
              showContent="limited"
              // showContent="unlimited"
              mainColor="#8fb593"
              disabledColor="#d8d8d8"
              contentColor="#fff"
            />
          }
        />
        <Route path="/button" element={<Button />} />
        <Route
          path="/checkbox"
          element={
            <Checkbox
              // type="checkbox"
              type="radio"
              mainColor="#8fb593"
            />
          }
        />
        <Route
          path="/rating"
          element={
            <Rating
              scale="5"
              scaleOne="poor"
              scaleTwo="ok"
              scaleThree="good"
              scaleFour="very good"
              scaleFive="excellent"
              mainColor="#ffd700"
            />
          }
        />
        <Route
          path="/selectbox"
          element={
            <SelectBox
              mainColor="#8fb593"
              boxHeight="limited"
              // boxHeight="unlimited"
            />
          }
          boxHeight="unlimited"
        />
        <Route
          path="/swiper"
          element={
            <Swiper
              // mainPhotoPosition="right"
              mainPhotoPosition="left"
              // mainPhotoPosition="top"
              // mainPhotoPosition="bottom"
              // templateSize="small"
              // templateSize="medium"
              templateSize="large"
              // itemsColumns="1"
              // itemsColumns="2"
              // itemsColumns="3"
              itemsColumns="4"
              mainColor="#8fb593"
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
