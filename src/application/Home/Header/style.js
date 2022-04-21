import styled from "styled-components";
import globalStyle from "../../../assets/global-style";

export const HeaderContainer = styled.header`
  /* position: relative; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* width: 100%; */
  height: 60px;
  border-bottom: 1px solid ${globalStyle["border-color"]};
  background: #fff;
  .container {
    /* position: relative; */
    display: flex;
    align-items: center;
    max-width: 1440px;
    height: 100%;
    margin: auto;
  }
  .logo {
    display: inline-block;
    height: 22px;
    margin: 0 12px 0 24px;
    .logo_img {
      width: 107px;
      height: 22px;
    }
  }
`;
