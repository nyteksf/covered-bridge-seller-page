import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("admin_token");
  const envToken = import.meta.env.VITE_ADMIN_TOKEN;

  console.log("admin_token (localStorage):", token);
  console.log("VITE_ADMIN_TOKEN (env):", envToken);

  return token === envToken;
};

const ProtectedAdminRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedAdminRoutes;
