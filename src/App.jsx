import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry from "./pages/Entry";
import Random from "./pages/Random";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Entry />} />
        <Route path="random" element={<Random/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// #fff
