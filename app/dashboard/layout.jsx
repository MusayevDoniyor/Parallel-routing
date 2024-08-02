import React from "react";

const Layout = ({ products, users }) => {
  return (
    <div className="flex">
      {products} {users}
    </div>
  );
};

export default Layout;
