import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateComponent from "../components/PrivateComponent";
import { privateRoutes, publicRoutes } from "./config";

const AppRoutes = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
      <Route element={<PrivateComponent />}>
        {privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
