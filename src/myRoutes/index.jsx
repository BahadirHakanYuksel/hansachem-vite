import MainLayout from "../MainLayout";
import About from "../pages/About";
import Admin from "../pages/Admin";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Products from "../pages/Products";

export const myRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: ":path_subCategoryName",
        element: <Products />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];
