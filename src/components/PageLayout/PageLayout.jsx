import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
const PageLayout = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Sidebar />

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
