import * as React from "react";
import * as ReactDOM from "react-dom/client";
// eslint-disable-next-line no-restricted-imports
import "@mantine/core/styles.css";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
