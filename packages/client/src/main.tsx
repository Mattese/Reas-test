import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

export default axiosInstance;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
