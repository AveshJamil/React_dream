import React from "react";
import ReactDOM from "react-dom/client";


const heading =React.createElement("h1",{id:"heading"},"avesh_dream");

//console.log(heading);

const jsxelement=<h1 id="heading"> Hello React  </h1>

console.log(jsxelement);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxelement);













