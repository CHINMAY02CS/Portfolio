import { Suspense } from "react";
// import { Outlet } from "react-router-dom";

export default function MyRoutes() {
  return {
    path: "/",
    element: (
      <Suspense fallback={<h2>Loading . . .</h2>}>
        <Layout />
      </Suspense>
    ),
    children: [
      { path: "", element: <Portfolio />, errorElement: <ErrorBoundary /> },
      { path: "/", element: <Portfolio />, errorElement: <ErrorBoundary /> },
      {
        path: "/projects",
        element: <FeaturedProjects />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorBoundary />,
      },
    ],
  };
}

import { useRouteError } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Layout from "./components/templates/Layout";
import FeaturedProjects from "./pages/FeaturedProjects";
import About from "./pages/About";
const ErrorBoundary = () => {
  const error = useRouteError() as { message?: string };
  return (
    <div>
      <h1>Error</h1>
      <small>{error?.message}</small>
    </div>
  );
};
