import { Toaster } from "sonner";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/NotFound";
import LandForSale from "./pages/AllLand";

import "./index.css";
import StateLand from "./pages/StateLand";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        theme="dark" // Using the built-in dark  theme as base
        richColors={false} // Turn off rich colors to use our custom colors
        closeButton={true}
        toastOptions={{
          style: {
            background: "#0f2417", // Dark green background
            border: "4px solid #166534", // Darker green border
            borderRadius: "0", // Square corners
            fontFamily: "Montserrat, sans-serif",
          },
          // Force both title and description to use these colors
          className: "green-toast",
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/land-for-sale" element={<LandForSale />} />
        <Route path="/state/:slug" element={<StateLand />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
