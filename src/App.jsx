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
  NewsComponentSingle,
  ResN,
  NewNews,
  ArticlePage,
  ArticlePage2,
  ArticlePage3,
  ArticlePage4,
  NewsComponent,
  DietPage,
  DietPageSingle,
} from "./components";
import DidYouKnowSingle from "./pages/DidYouKnowSingle";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
        {/* <Route path="/resN/:id" element={<ResN />} /> */}
        <Route path="/didYouKnow" element={<DidYouKnow />} />
        <Route path="/didYouKnow/:id" element={<DidYouKnowSingle />} />
        <Route path="/news" element={<News />} />
        <Route path="/new/:id" element={<NewsComponentSingle />} />
        <Route path="/challenge" element={<DietPage />} />
        <Route path="/challenge/:id" element={<DietPageSingle />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route
          path="/articles-Eat-these-carbs-to-live-longer"
          element={<ArticlePage4 />}
        />
        <Route
          path="/article-3-food-to-avoid-for-a-healthier-lifestyle"
          element={<ArticlePage2 />}
        />
        <Route
          path="/article-6-Tips-to-control-food-sizes"
          element={<ArticlePage3 />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}
export default App;
