import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// function Root() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById("root")
// );