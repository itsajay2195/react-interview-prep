import React from "react";

const TabsWrapper = ({ children }) => {
  return (
    <div style={{ dispaly: "flex", flexDirection: "column" }}>
      {children}
      <div style={{ display: "flex", justifyContent: "space-around" }}></div>
    </div>
  );
};

export default TabsWrapper;
