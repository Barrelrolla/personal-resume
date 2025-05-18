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
import RootLayout from "./layouts/RootLayout";
import { navLinks } from "./data/navLinks";
import "./index.css";

const navRoutes: NonIndexRouteObject[] = navLinks.map((link) => {
  return {
    path: link.path,
    Component: link.element,
    ErrorBoundary: ErrorPage,
  };
});
const detailsRoutes: NonIndexRouteObject[] = navLinks.map((link) => {
  return {
    path: `${link.path}/:id`,
    Component: DetailsPage,
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
      ...detailsRoutes,
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
