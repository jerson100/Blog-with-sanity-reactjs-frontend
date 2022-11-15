import { Outlet } from "react-router-dom";
import Footer from "../../commons/Footer";
import MainHeader from "../../commons/MainHeader";

const MainLayout = () => {
  return (
    <div>
      <MainHeader />
      <main className="mt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
