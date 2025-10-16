import { Toaster } from "sonner";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import FaqPage from "./pages/FaqPage";
import LandInfo from "./pages/LandInfo";
import LandForSale from "./pages/AllLand";
import PageNotFound from "./pages/NotFound";
import OurGuarantee from "./pages/OurGuarantee";
import Testimonials from "./pages/Testimonials";
import CreateListing from "./pages/CreateListing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StateNamePage from "./pages/StateNamePage";
import TermsAndConditions from "./pages/TermsAndConditions";
import ProtectedAdminRoutes from "./components/ProtectedAdminRoutes";
import ParcelUploadInstructions from "./pages/ParcelUploadInstructions";

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
        <Route path="/state/:stateSlug" element={<StateNamePage />} />
        {/* INDIVIDUAL LISTING GENERATION VIA DYNAMIC PAGE */}
        <Route path="/listing/:propertyId" element={<LandInfo />} />
        {/* LEGAL & PRIVACY RELATED */}
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        {/* MISC. */}
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/guarantee" element={<OurGuarantee />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/* PROPERTY LISTING GENERATION FORM/WIZARD */}
        <Route path="/login" element={<Login />} />
        <Route path="create" element={<CreateListing />} />
        <Route path="/admin" element={<ProtectedAdminRoutes />}>
          <Route path="edit/:propertyId" element={<CreateListing />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/* Pain Forge GPT Instructions + Link */}
        <Route path="/painforge" element={<ParcelUploadInstructions />} />
        {/* 404 ERROR PAGE */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
