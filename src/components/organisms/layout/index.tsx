import React from "react";

interface ILayout {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = (props) => {
  return (
    <div>
      {/* Add whatever layout components you want to surround the children with */}
      <header>Header</header>
      <main>
        {props.children} {/* Render props.children here */}
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
