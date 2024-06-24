import React from "react";
import "../src/styling/App.scss";
import Header from "./components/headerComponents/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import WeatherPage from "./pages/WeatherPage/WeatherPage";
import ResortsPage from "./pages/ResortsPage/ResortsPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/resorts" element={<ResortsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
