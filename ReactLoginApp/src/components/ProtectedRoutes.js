import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  const isAuth = localStorage.getItem("auth");
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};
export default ProtectedRoutes;
