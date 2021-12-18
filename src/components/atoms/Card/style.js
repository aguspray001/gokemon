import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

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

export const ImageEffect = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-color: transparent;
  &:hover {
    animation: ${bounce} 1s ease 3;
  }
`;

export const CardWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 0.2rem;
  border: 3px solid black;
  position: relative;
  box-shadow: 10px 10px 1px rgba(0, 0, 255, 0.4);
  background-color: rgba(100, 0, 255, 1);
  transform: skew(-5deg);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    top: 15%;
    left: 15%;
    position: absolute;
    z-index: -1;
    width: 7rem;
    height: 7rem;
    border-radius: 3.5rem;
    background-color: white;
  }

  &:after {
    content: "";
    display: block;
    top: 15%;
    left: 15%;
    position: absolute;
    z-index: -1;
    width: 7rem;
    height: 7rem;
    border-radius: 3.5rem;
    background-color: white;
  }

  &:hover {
    background-color: white;
    box-shadow: none;

    &:before {
      top: 15%;
      left: 15%;
      width: 7rem;
      height: 3rem;
      border-top-left-radius: 14rem;
      border-top-right-radius: 14rem;
      background-color: rgba(255, 0, 0, 0.5);
    }

    &:after {
      top: 55%;
      left: 15%;
      width: 7rem;
      height: 3rem;
      border-bottom-left-radius: 14rem;
      border-bottom-right-radius: 14rem;
      background-color: rgba(0, 244, 235, 0.5);
    }
  }
`;
export const Title = styled.div`
  position: absolute;
  top: -0.5rem;
  left: 0.2rem;
  padding: 0.2rem;
  border-radius: 0rem 0.5rem 0 0.5rem;
  border: 2px solid black;
  background-color: white;
  color: black;
  font-weight: 600;
  font-size: 0.6rem;
  text-shadow: 1px 1px 1px grey;
  text-transform: uppercase;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const cardInfo = (cardType) => css`
  width: ${cardType==="collection"?"100%":"70%"};
  text-align: center;
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  padding: 0.2rem;
  background-color: white;
  border: 2px solid black;
  transform: skewX(-10deg);
  font-size: 0.6rem;
  font-weight: 600;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
