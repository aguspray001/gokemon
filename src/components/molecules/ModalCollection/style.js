import { css } from "@emotion/react";

export const modalContainer =(onShow)=> css`
  display: ${onShow?"flex":"none"};
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const modalContent = css`
  padding: 1.5rem;
  max-width: 350px;
  background-color: white;
  border-radius: 0.5rem;
  border: 3px solid black;

  @media (min-width: 480px){
    max-width: 600px;
  }
`;
export const header = css`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const body = css`
  padding: 0.7rem;
  display: flex;
  justify-content: space-around;
`;

export const footer = css`
  display: flex;
  padding: 0.7rem;
`;
