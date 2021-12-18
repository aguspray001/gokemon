import { css, keyframes } from "@emotion/react";

const blink = keyframes`
    from{
    background-color: rgba(0, 0, 0, 0.5);
    }

    to {
    background-color: rgba(0, 0, 0, 0.7);
    }
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

export const field = css`
  position: relative;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const fieldContainer = css`
  background-color: rgba(0, 0, 0, 0.5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 3rem;

  @media (min-width: 530px) {
    flex-direction: row;
  }
`;

export const blinkEffect = css`
  animation: ${blink} 0.5s infinite;
`;

export const pokemonStyle = (animation) => css`
  animation: ${bounce} 1.5s ease ${animation?"infinite":"0"};
  filter: ${animation? "grayscale(0%)":"grayscale(100%)"};
  margin-bottom: 1rem;
  transition: all 0.3s ease-in-out;

  @media (min-width: 530px) {
    flex-direction: row;
    margin-bottom: -10px;
  }
`;
