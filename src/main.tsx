import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  NonIndexRouteObject,
  RouterProvider,
} from "react-router";
import { ThemeContextProvider } from "@barrelrolla/react-components-library";
import HomePage from "./pages/HomePage";
import RootLayout from "./layouts/RootLayout";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import { navLinks } from "./data/navLinks";
import "./index.css";

const navRoutes: NonIndexRouteObject[] = navLinks.map((link) => {
  return { path: link.path, Component: link.element, ErrorBoundary: ErrorPage };
});
const router = createHashRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      ...navRoutes,
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider value={{ buttonsRetainFocus: false }}>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>,
);
