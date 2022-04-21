import React from "react";
import { HeaderContainer } from "./style";

function Header() {
  return (
    <HeaderContainer>
      {/* <header className="main_header"> */}
      <div className="container">
        <a href="/" className="logo">
          <img
            src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
            alt="稀土掘金"
            className="logo_img"
          />
        </a>
      </div>
      {/* </header> */}
    </HeaderContainer>
  );
}

export default Header;
