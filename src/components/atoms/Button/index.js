/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";
import { buttonContainer } from "./style";

function Button({ title, onClick, type = "btn", href="" }) {
  if(type==="btn") return (
    <button css={buttonContainer} onClick={onClick}>{title}</button>
  );
  else return (
    <div css={buttonContainer}>
      <Link to={href} onClick={onClick}>{title}</Link>
    </div>
  );
}

export default Button;
