import { RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/feathericon.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/select2.min.css";
import "./assets/css/style.css";
import "./assets/plugins/datatables/datatables.min.css";
import router from "./router/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
