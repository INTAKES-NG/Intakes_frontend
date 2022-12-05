import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Restaurant,
  DidYouKnow,
  News,
  About,
  Contact,
  Error,
} from "./components";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/didYouKnow" element={<DidYouKnow />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
