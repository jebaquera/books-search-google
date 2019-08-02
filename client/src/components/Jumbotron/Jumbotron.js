import React from "react";

const Jumbotron = ({ children }) => (
  <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "aliceblue" }}
  >
    <div 
      style={{ height: 150, clear: "both", paddingTop: 10, paddingBottom: 20, textAlign: "Center" }}
      className="container">
      {children}
    </div>
  </div>
);

export default Jumbotron;
