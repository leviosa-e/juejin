import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { routeConfig } from "./routes";
import { ResetGlobalStyle } from "./assets/reset-css";

function App() {
  const routes = useRoutes(routeConfig);
  return (
    <div className="App">
      <ResetGlobalStyle />
      {routes}
    </div>
  );
}

export default App;
