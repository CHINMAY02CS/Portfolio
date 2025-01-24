import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyRoutes from "./MyRoutes";

function App() {
  const router = createBrowserRouter([MyRoutes()]);
  return <RouterProvider router={router} />;
}

export default App;
