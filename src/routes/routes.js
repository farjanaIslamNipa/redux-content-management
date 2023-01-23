import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import AddPost from "../pages/dashboard/AddPost";
import BlogList from "../pages/dashboard/BlogList";
import EditPost from "../pages/dashboard/EditPost";
import Category from "../pages/main/Category";
import Home from "../pages/main/Home";
import ReadingHistory from "../pages/main/ReadingHistory";
import ReadMore from "../pages/main/ReadMore";

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
      {
        path: "/blog/:id",
        element: <ReadMore />
      },
      {
        path: "/reading-history",
        element: <ReadingHistory />
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