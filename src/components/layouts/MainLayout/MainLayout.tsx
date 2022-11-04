import { Outlet } from "react-router-dom";
import MainHeader from "../../commons/MainHeader";

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <main style={{ minHeight: "calc(100vh - 65px)" }} className="mt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
