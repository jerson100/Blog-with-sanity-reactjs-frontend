import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import WorldView from "../../../pages/public/WorldView";
// import MainLayout from "../../layouts/MainLayout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<MainLayout />}>
          <Route index element={<WorldView />} />
        </Route> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
