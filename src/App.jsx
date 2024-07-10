import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./Auth/AuthLayout";
import Loader from "./components/Loader";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
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
      },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "booking",
        element: <Bookings />,
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
