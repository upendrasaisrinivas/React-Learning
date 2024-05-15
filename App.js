import React from "react";
import ReactDOM from "react-dom/client";

const container = <h1 id="container">This is JSX first code</h1>
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //passing a react element inside the root
  //async defer
  root.render(container);