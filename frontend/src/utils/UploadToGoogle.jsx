import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const GoogleDriveAuth = ({ getAccessToken }) => {
  const [, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  // Define required scopes
  const DRIVE_SCOPES = [
    "https://www.googleapis.com/auth/drive.file",
    "email",
    "profile",
  ].join(" ");

  const loginCred = useGoogleLogin({
    onSuccess: (codeResponse) => {
      const token = codeResponse.access_token;
      verifyTokenScopes(token).then((isValid) => {
        if (isValid) {
          getAccessToken(token);
          setCookie("access_token", token, {
            path: "/",
            maxAge: 35 * 60,
          });
          toast.success("Login successful!");
          navigate(-1);
          window.location.reload();
        } else {
          toast.error("Missing required Drive permissions");
        }
      });
    },
    onError: (error) => {
      console.error("Login error:", error);
      toast.error("Login failed");
      navigate(-1);
      window.location.reload();
    },
    // Critical: Add scopes to the login request
    scope: DRIVE_SCOPES,
    // Recommended for Drive API
    prompt: "consent",
  });

  // Verify token has required scopes
  const verifyTokenScopes = async (token) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`
      );
      const data = await response.json();

      if (data.error) return false;

      // Check if Drive scope is present
      const hasDriveScope = data.scope?.includes(
        "https://www.googleapis.com/auth/drive.file"
      );

      if (!hasDriveScope) {
        console.warn("Missing Drive scope in token:", data.scope);
      }

      return hasDriveScope;
    } catch (error) {
      console.error("Token verification failed:", error);
      return false;
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen gap-5">
      <p>Please login with Google to continue!</p>
      <button
        onClick={loginCred}
        className="px-4 py-2 border flex gap-2 rounded-lg bg-white hover:shadow transition"
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google logo"
        />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default GoogleDriveAuth;
