import { css } from "@emotion/react";

export const buttonContainer = css`
  padding: 0.4rem;
  width: max-content;
  border: 2px solid black;
  margin: 0.3rem;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 1px rgba(0, 0, 255, 0.4);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-color: white;
  font-size: 0.7rem;
  font-family: inherit;
  &:hover {
    border-color: blue;
    color: blue;
    transform: skewY(0deg);
  }

  a{
    all: unset;
  }
`;
