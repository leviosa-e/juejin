import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { routeConfig } from "./routes";

function App() {
  const routes = useRoutes(routeConfig);
  return <div className="App">{routes}</div>;
}

export default App;
