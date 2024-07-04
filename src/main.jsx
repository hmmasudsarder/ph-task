import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-slate-200">
    <div className="max-w-screen-lg mx-auto">
      <App />
    </div>
    </div>
  </React.StrictMode>
);
