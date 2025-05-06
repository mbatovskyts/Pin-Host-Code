import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { init, AuthType } from "@thoughtspot/visual-embed-sdk";

init({
  thoughtSpotHost: "https://ps-internal.thoughtspot.cloud",
  authType: AuthType.None, 
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);