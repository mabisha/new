import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";

import { DataProvider } from "./contexts/Datacontext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 2 * 60 * 1000,
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="758586698452-7752bbsq0oek6fo17g3qultr42p0ts5u.apps.googleusercontent.com">
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <DataProvider>
          <App />
        </DataProvider>{" "}
      </QueryClientProvider>

      <Toaster/>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
