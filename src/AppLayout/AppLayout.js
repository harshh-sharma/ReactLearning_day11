import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Error from "./Components/Error/Error";
import Detail from "./Components/RestaurantDetail/Detail";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/page/:resId',
        element:<Detail/>
      }
    ],
    errorElement:<Error/>
  },
]);

export default AppLayout;
