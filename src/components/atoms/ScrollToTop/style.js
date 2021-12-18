const { css } = require("@emotion/react");

export const btnStyle = css`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
  transform: rotate(-90deg);
  cursor: pointer;

  &:hover{
    background-color: grey; 
  }
`;

export const arrow = css`
content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIGZpbGw9InJnYmEoMCwwLDAsMC44KSIvPjxwb2x5bGluZSBmaWxsPSIjZmZmIiBwb2ludHM9IjQuOCwxMS4xIDE1LjUsMTEuMSAxMS41LDYuNyAxMyw1LjIgMTkuNywxMi4yIDEyLjksMTkgMTEuMSwxNy40IDE1LjMsMTMuMyA0LjgsMTMuNCIvPjwvc3ZnPg==);
`
