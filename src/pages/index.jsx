import React from "react";
import Header from "./Partials/Header";
import Footer from "./Partials/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
