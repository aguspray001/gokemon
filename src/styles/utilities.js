import { css } from "@emotion/react";

export const container = css`
  max-width: 800px;
  height: 100%;
`;

export const bgImage = css`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  backgorund-size: cover;
`;

export const flex = css`
  display: flex;
`;

export const flexCenter = css`
  justify-content: center;
  align-items: center;
`;

export const flexCol = css`
  flex-direction: column;
`;

export const flexRow = css`
  flex-direction: row;
`;

export const grid = css`
  display: grid;
`;

export const gridCols = css`
  /* mobile version*/
  grid-template-columns: repeat(3, minmax(0, 1fr));

  /* tablet-dekstop version*/
  @media (min-width: 480px) and (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const imageCover = css`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const line = css`
  width: 90%;
  height: 2px;
  background-color: black;
  margin-bottom: 1rem;
`