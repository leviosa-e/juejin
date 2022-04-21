import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";

function Home() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <Outlet />
    </div>
  );
}

export default Home;
