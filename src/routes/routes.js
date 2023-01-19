import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddPost from "../pages/dashboard/AddPost";
import BlogList from "../pages/dashboard/BlogList";
import EditPost from "../pages/dashboard/EditPost";
import Category from "../pages/main/Category";
import Home from "../pages/main/Home";

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
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <BlogList />
      },
      {
        path: "add-post",
        element: <AddPost />
      },
      {
        path: "edit-post/:id",
        element: <EditPost />
      },
    ]
  }
]);

export default routes;