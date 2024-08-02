import React from "react";

const Layout = ({ products, users }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 min-h-screen">
      {products} {users}
    </div>
  );
};

export default Layout;
