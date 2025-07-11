import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import Cart from "./pages/Cart.tsx";
import Favourites from "./pages/Favourites.tsx";
import Header from "./components/Header.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favourites" element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
