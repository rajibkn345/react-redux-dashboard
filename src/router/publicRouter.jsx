import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Forgot from "../pages/auth/forgot";
//crate public router
const publicRouter = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot", element: <Forgot /> },
];

export default publicRouter;
