/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { ImageEffect } from "./style";
import pokeBall from "../../../assets/images/pokeball.png";

function Loader() {
  return (
    <div
      css={css`
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
      `}
    >
      <img
        width={100}
        css={ImageEffect}
        src={pokeBall}
        alt="pokeball-loader"
      />
      <div css={css`margin-left:1rem; color: white;`}>
          Loading...
      </div>
    </div>
  );
}

export default Loader;
