import React from "react";
import ReactDOM from "react-dom/client";

const element = <span>This is JSX Span</span>;
const Heading = () => <h1 id="heading"> This is Heading </h1>

// Component Composition - Calling Heading in Container
const Container = () => (<div id="container"><Heading/>{element}</div>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);