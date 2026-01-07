import { HTTPCALLS } from "../services/API/HTTPRequests";
import { toastMessageContainer } from "./Toaster";

//logout handler
export const logoutHandler = (message) => {
  const cookieName = "userToken";
  document.cookie =
    cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  localStorage.clear();

  HTTPCALLS.post("/logout").finally(() => {
    toastMessageContainer(
      "warn",
      `${message.length ? message : "Logged Out!"}`
    );
  });
};
