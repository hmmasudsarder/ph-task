import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Footer from "./Components/Footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="">
      <div className="max-w-screen-lg mx-auto">
        <App />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
