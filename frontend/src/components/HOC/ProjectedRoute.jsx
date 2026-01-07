import { Cookies } from "react-cookie";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const cookie = new Cookies();

  const token = cookie.get("userToken");
  localStorage.setItem("userToken", token);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
}

export default ProtectedRoute;
