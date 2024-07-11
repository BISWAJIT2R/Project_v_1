import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Auth/AuthLayout";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import HomeLayout from "./pages/HomeLayout";
import Home, { HomeLoader } from "./pages/Home";
import Bookings from "./pages/Bookings";
import Users from "./pages/Users";
import Settings from "./pages/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    // loader: <Loader />,
    children: [
      {
        path: "login",
        element: <Login />,
        loader: async () => {
          const data = await fetch("https://fakestoreapi.com/products");
          const result = await data.json();
          // console.log(result)
          return result;
        },
      },
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/app",
    element: <HomeLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
        loader: HomeLoader
      },
      {
        index: true,
        element: <Home />,
        // loader: HomeLoader
      },
      {
        path: "booking",
        element: <Bookings />,
        children: [
          
        ]
      },
      {
        path: "users",
        element: <Users />,
      },

      {
        path: "setting",
        element: <Settings />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
