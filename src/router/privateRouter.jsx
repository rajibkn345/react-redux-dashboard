import PageLayout from "../components/PageLayout/PageLayout";
import Dashboard from "../pages/admin/dashboard";
import Users from "../pages/admin/users";
//crate privat router
const privateRouter = [
  {
    element: <PageLayout />,
    children: [
      { element: <Dashboard />, path: "/" },
      { element: <Users />, path: "/users" },
    ],
  },
];

export default privateRouter;
