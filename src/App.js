import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import accordionData from "./utils/accordionData";
import optionsToSelect from "./utils/optionsToSelect";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/*"
          element={
            <Main
              accordionData={accordionData}
              accordionTitle="Accordion"
              optionsToSelect={optionsToSelect}
              placeholder="Choose your character"
              disabled={accordionData.disabled}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
