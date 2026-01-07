import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import rosebudLogo from "../../../assets/rosebud-logo.png";
import axios from "axios";
import { HTTPCALLS } from "../../../services/API/HTTPRequests";
import { useCookies } from "react-cookie";
import { decrypt } from "../../../utils/crypto";
import { useStore } from "../../../store";
import toast from "react-hot-toast";
import Spinner from "../../../components/Admin/AdminComponents/Elements/Spinner";
// import { storage } from "../../../utils/Firebase/firebase";
// import { ref, getDownloadURL } from "firebase/storage";
import Avatar from "../../../../public/avatar.jpg";
import { PiUserDuotone } from "react-icons/pi";
import { MdOutlineLock } from "react-icons/md";
const Login = () => {
  axios.defaults.withCredentials = true;
  const [cookies, setCookie] = useCookies(["userToken"]);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [viewPassword, setViewPassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/admin/overview";

  //store
  const setUser = useStore((state) => state.setUser);
  // const user = JSON.parse(localStorage.getItem("userprofile"));

  const submitLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: false,
    };

    const usernameRegEx = /[^-s] /;

    if (userName.trim().length === 0 || password.trim().length === 0) {
      toast.error(
        "Username or Password can't be empty or contain whitespace!",
        { id: "error" }
      );
      setIsLoading(false);
      return;
    }

    if (usernameRegEx.test(userName)) {
      toast.error("Username can't contain whitespace!", { id: "error" });
      setIsLoading(false);
      return;
    }

    toast.dismiss();

    const loginPromise = HTTPCALLS.post(
      `/login`,
      { username: userName, password },
      config
    )
      .then((resp) => {
        const response = decrypt(resp?.data?.data);
        if (resp.status === 200) {
          const userData = {
            name: response?.username,
            email: response?.email,
            role: response?.role,
            userId: response?.id,
            photo: Avatar,
          };
          setUser(userData);
          setCookie("userToken", resp.data.token, {
            path: "/",
            maxAge: 35 * 60, // 35 minutes
          });

          localStorage.setItem("userprofile", JSON.stringify(userData));
          localStorage.setItem("userToken", resp?.data?.token);
          navigate(from);
          return "Login successful!";
        } else {
          throw new Error("Authentication Failed!");
        }
      })
      .catch((err) => {
        throw new Error(
          err.response?.data?.message || "Authentication Failed!"
        );
      });

    toast
      .promise(loginPromise, {
        loading: "Logging in...",
        success: (msg) => msg,
        error: (err) => err.message,
      })
      .finally(() => setIsLoading(false));
  };

  const handlePasswordToggle = () => {
    setViewPassword((prev) => (prev === "text" ? "password" : "text"));
  };

  // Getting the userToken from cookies
  const userToken = cookies.userToken;

  if (userToken) {
    return <Navigate to={from} replace />;
  }

  return (
    <div className="w-full min-h-screen sm:flex-row flex-col overflow-y-auto overflow-x-hidden flex justify-center items-center p-10">
      <div className="w-auto max-h-[20rem] md:h-full flex flex-1 flex-col justify-center items-center p-5">
        <Link
          to={"/"}
          className="h-40 cursor-pointer w-[280px] flex justify-start items-center"
        >
          <img
            src={rosebudLogo}
            alt=""
            className="w-full h-full object-contain"
          />
        </Link>
        <div className="w-full h-full p-5 flex flex-col justify-start items-center">
          <div className="font-bold text-2xl text-center text-secondary">
            Where Education Blossoms
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[50%] h-full">
        <div className="h-20 min-w-[280px] flex justify-center flex-col items-start w-[50%] font-bold text-xl">
          Welcome to
          <div className="text-secondary relative w-full whitespace-nowrap">
            Rosebud Dashboard
            <span className="w-[160px] h-[2px] bg-secondary absolute bottom-0 left-0"></span>
          </div>
        </div>
        {/* <Link className="inline-block" to="/">
          <img src="/logo.svg" alt="" />
        </Link>
        <h1 className="mb-4 mt-4 text-2xl font-semibold text-[#1d1d1d]">
          Log in to your account
        </h1> */}
        <form
          onSubmit={submitLogin}
          action=""
          className="flex mt-2 ease w-[50%] h-auto flex-1 flex-col justify-center items-center gap-6"
        >
          <div className="w-full relative min-w-[280px] flex flex-col items-start text-sm font-semibold gap-1 text-matte/80">
            <input
              required
              id="username"
              type="text"
              value={userName}
              autoComplete="username"
              placeholder="Username / Email"
              className="block w-full rounded-lg border border-[#bcbcbc] focus:border-[#c8c8c8] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none"
              onChange={(e) => setUserName(e.target.value)}
            />{" "}
            <span
              className={
                "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]"
              }
            >
              <PiUserDuotone />
            </span>
          </div>
          <div className="w-full min-w-[280px] text-sm font-semibold flex relative flex-col items-start gap-1 text-matte/80">
            <span
              className="password-eye-icon cursor-pointer text-gray-400 absolute top-3 right-4"
              onClick={handlePasswordToggle}
            >
              {viewPassword === "text" ? (
                <RemoveRedEyeIcon fontSize="small" />
              ) : (
                <VisibilityOffIcon fontSize="small" />
              )}
            </span>
            <input
              required
              id="password"
              type={viewPassword}
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="block w-full rounded-lg border border-[#bcbcbc] focus:border-[#c8c8c8] bg-[#FAFBFE] p-3 pl-9 placeholder:text-[#c3c3c3] focus:outline-none"
            />{" "}
            <span
              className={
                "absolute left-1 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-xl text-[#c3c3c3]"
              }
            >
              <MdOutlineLock />
            </span>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex min-w-[280px] justify-center items-center transition-all duration-[300ms]  p-3 rounded-lg text-white capitalize font-semibold  ${
              isLoading ? "bg-secondary/70" : "bg-secondary hover:bg-black"
            }`}
          >
            {isLoading ? (
              <span className="w-full flex justify-center items-center gap-2">
                <Spinner width="w-4" height="h-5" />
                Logging In..
              </span>
            ) : (
              " log In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
