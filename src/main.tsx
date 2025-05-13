import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeContextProvider } from "@barrelrolla/react-components-library";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import { navLinks } from "./data/navLinks";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            {navLinks.map((link) => {
              return <Route path={link.path} element={<link.element />} />;
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>,
);
