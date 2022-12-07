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
import DidYouKnowSingle from "./pages/DidYouKnowSingle";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/didYouKnow" element={<DidYouKnow />} />
        <Route path="/didYouKnow/:id" element={<DidYouKnowSingle />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
