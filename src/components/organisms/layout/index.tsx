import React from "react";
import { Outlet } from "react-router";

interface ILayout {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div>
        <Outlet />
        {children}
      </div>
    </>
  );
};

export default Layout;
