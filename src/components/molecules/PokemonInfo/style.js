import { css } from "@emotion/react";

export const pokemonInfoWrapper = css`
  max-width: 40rem;
  padding: 0.5rem;
  background-color: white;
  border: 3px solid black;
  border-radius: 0.6rem;
  margin-top: 1rem;
`;

export const imageBorder = css`
  border: 3px solid black;
  border-radius: 50%;
  background-color: rgba(0, 0, 160, 0.3);
  margin: 0.2rem 1rem 0 0;
`;

export const colorSwitch = (type) => {
  switch (type) {
    case "grass":
      return `background-color: green;
                color: white;`;
    case "poison":
      return `background-color: purple;
                color: white;`;
    case "water":
      return `background-color: blue;
                color: white;`;
    case "fire":
      return `background-color: orange;
                color: black;`;
    default:
      return `background-color: yellow;
                 color: black;`;
  }
};

export const typeBox = (type) => css`
  margin: 0.4rem;
  padding: 0.6rem;
  border-radius: 0.5rem;
  text-align: center;
  ${colorSwitch(type)}

  p {
    font-size: 0.7rem;
  }
`;
