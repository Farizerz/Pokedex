import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/organisms/layout";

const Pokemon = React.lazy(async () => await import("../pages/pokemon"));

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Pokemon />} />
          <Route path={"pokemon"} element={<Pokemon />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Pages;
