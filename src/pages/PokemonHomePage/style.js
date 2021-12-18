import { css } from "@emotion/react";

export const GridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1.5rem;
  gap: 1.5rem;
  grid-auto-rows: minmax(185px, auto);
  grid-auto-flow: dense;

  ::-webkit-scrollbar{
    display: none;
  }

  @media (min-width: 360px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  @media (min-width: 480px) {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export const GridItems = css`
  grid-column-end: span 3;
  grid-row-end: span 1;
`;
