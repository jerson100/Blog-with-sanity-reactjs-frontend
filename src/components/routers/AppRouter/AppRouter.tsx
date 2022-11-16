import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostView from "../../../pages/public/PostView";
import WorldView from "../../../pages/public/WorldView";
import MainLayout from "../../layouts/MainLayout";
import CategoryView from "../CategoryView";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WorldView />} />
          <Route path="/:category/:post" element={<PostView />} />
          <Route path="/:category" element={<CategoryView />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
