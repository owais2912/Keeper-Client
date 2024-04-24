import Main from "../components/Main";
import Welcome from "../pages/Welcome";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login/index";
import Profile from "../pages/Profile/index";

export const publicRoutes = [
  {
    path: "/",
    component: <Welcome />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];
export const privateRoutes = [
  {
    path: "/notes",
    component: <Main />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
];
