/** @jsxImportSource @emotion/react */
import React from "react";
import { arrow, btnStyle } from "./style";

function ScrollToTop({ onClick }) {
  return (
    <button css={btnStyle} onClick={()=>onClick()}>
      <div css={arrow} />
    </button>
  );
}

export default ScrollToTop;
