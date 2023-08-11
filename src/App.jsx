import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/feathericon.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/select2.min.css";
import "./assets/css/style.css";
import "./assets/plugins/datatables/datatables.min.css";
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
