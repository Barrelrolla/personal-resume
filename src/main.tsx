import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  NonIndexRouteObject,
  RouterProvider,
} from "react-router";
import { ThemeContextProvider } from "@barrelrolla/react-components-library";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import BioLayout from "./layouts/BioLayout";
import RootLayout from "./layouts/RootLayout";
import { navLinks } from "./data/navLinks";
import "./index.css";

const navRoutes: NonIndexRouteObject[] = navLinks.map((link) => {
  return {
    path: link.path,
    element: <BioLayout title={link.path} />,
    children: [
      { index: true, Component: link.element },
      {
        path: ":id",
        Component: DetailsPage,
      },
    ],
  };
});

const router = createBrowserRouter([
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
