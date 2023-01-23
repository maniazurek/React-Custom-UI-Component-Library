import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
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
              optionsToSelect={optionsToSelect}
              placeholder="Choose your character"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
