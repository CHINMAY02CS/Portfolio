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
      { path: "", element: <Dashboard />, errorElement: <ErrorBoundary /> },
    ],
  };
}

import { useRouteError } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/templates/Layout";
const ErrorBoundary = () => {
  const error = useRouteError() as { message?: string };
  return (
    <div>
      <h1>Error</h1>
      <small>{error?.message}</small>
    </div>
  );
};
