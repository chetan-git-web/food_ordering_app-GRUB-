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
import Instmart from "./components/Instamart";
import Loginpage from "./components/Login";
import { useState } from "react";
import userConfig from "./components/Context";
import { Provider } from "react-redux";
import store from "./utils/store";

const App = () => {
  const [islogin, setislogin] = useState(false);
  const [user, setuser] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <Provider store={store}>
      <userConfig.Provider value={{ user: user, setuser: setuser }}>
        <HeaderComponent islogin={islogin} setislogin={setislogin}/>
        <Outlet />
        <Footer />
      </userConfig.Provider>
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
        path: "/instamart",
        element: <Instmart />,
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
