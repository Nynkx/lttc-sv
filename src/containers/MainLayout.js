import React from "react";

import TheHeader from "./TheHeader";

const MainLayout = () => {
  return (
    <>
      <div className="lttc-app border">
        <TheHeader></TheHeader>
        <div className="lttc-wrapper">
          <div className="border">Sidebar goes here</div>
          <div className="border">Content goes here</div>
        </div>

        <footer>footer here</footer>
      </div>
    </>
  );
};

export default MainLayout;
