import { authClient } from "../utils/google-drive-apis";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function OauthClient() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { code } = new URLSearchParams(window.location.search);
    if (code) {
      authClient
        .getToken(code)
        .then(({ tokens }) => {
          localStorage.setItem("accessToken", tokens.access_token);
          navigate.push("/"); // Redirect to home page after authentication
        })
        .catch((err) => {
          console.error("Error exchanging code for access token:", err);
        });
    }
  }, [location.pathname]);

  return <div>Redirecting...</div>;
}

export default OauthClient;
