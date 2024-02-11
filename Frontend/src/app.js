import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import CartItems from "./components/Cart";
import Menu from "./components/RestaurantMenu";
import ErrorElement from "./components/ErrorRoute";
import Profile from "./components/Profile";
import Loginpage from "./components/Login";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./utils/store";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

const App = () => {
  return (
    <Provider store={store}>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Loginpage />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <CartItems />,
      },
      {
        path: "/restaurant/:id",
        element: <Menu />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

/**
 * Header
 * --logo
 * --nav items(right side)
 * --cart
 * Body
 * --Search Bar
 * --restaurant list
 *   -Restaurant card
 *      image
 *      name
 *      rating
 *      cousines
 * Footer
 * --links
 * --copyrights
 * */
