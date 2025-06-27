import { Toaster } from "sonner";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import LandInfo from "./pages/LandInfo";
import LandForSale from "./pages/AllLand";
import StateLand from "./pages/StateLand";
import PageNotFound from "./pages/NotFound";
import CreateListing from "./pages/CreateListing";
import ProtectedAdminRoutes from "./components/ProtectedAdminRoutes";

import "./index.css";

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
        {/* MAIN PROPERTY LIST PAGES */}
        <Route path="/land-for-sale" element={<LandForSale />} />
        <Route path="/state/:stateName" element={<StateLand />} />
        {/* INDIVIDUAL LISTING GENERATION VIA DYNAMIC PAGE */}
        <Route path="/listing/:propertyId" element={<LandInfo />} />
        {/* PROPERTY LISTING GENERATION FORM/WIZARD */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedAdminRoutes />}>
          <Route path="create" element={<CreateListing />} />
          <Route path="edit/:propertyId" element={<CreateListing />} />
        </Route>
        {/* 404 ERROR PAGE */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
