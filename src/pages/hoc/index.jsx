import React from "react";
import Layout from "../index";
const HOC = (WrappedComponent) => {
  return (props) => (
    <Layout>
      <WrappedComponent {...props} />
    </Layout>
  );
};

export default HOC;
