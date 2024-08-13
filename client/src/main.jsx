import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";
import customFetch from "./utils/customFetch.js";

// import axios from "axios";

// const getJobs = async () => {
//   try {
//     const response = await axios.get("http://localhost:5100/api/v1/jobs", {
//       withCredentials: true,
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching jobs:", error);
//     throw error;
//   }
// };

// getJobs();

// try {
//   const response = await customFetch.get("/jobs");
//   console.log(response);
// } catch (error) {
//   console.log(error);
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position='top-center' />
  </React.StrictMode>
);
