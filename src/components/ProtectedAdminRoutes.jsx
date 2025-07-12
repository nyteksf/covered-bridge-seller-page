import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return false;
  }

  try {
    const token = localStorage.getItem("admin_token");
    const envToken = import.meta.env.VITE_ADMIN_TOKEN;

    console.log("admin_token (localStorage):", token);
    console.log("VITE_ADMIN_TOKEN (env):", envToken);

    return token === envToken;
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return false;
  }
};

const ProtectedAdminRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedAdminRoutes;