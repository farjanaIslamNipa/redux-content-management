import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Category from "../pages/Category";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/category/:name",
        element: <Category />
      },
    ]
  }
]);

export default routes;