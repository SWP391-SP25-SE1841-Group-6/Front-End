// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { ToastContainer } from "react-toastify";

// createRoot(document.getElementById("root")).render(
//   <>
//     <App />
//     <ToastContainer />
//   </>
// );

import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StrictMode } from "react";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
