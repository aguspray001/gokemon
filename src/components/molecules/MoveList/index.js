/** @jsxImportSource @emotion/react */
import MoveItem from "../../atoms/MoveItem";
import React from "react";
import { listContainerStyle } from "./style";

function MoveList({ movements }) {
  return (
    <ul css={listContainerStyle}>
      {movements &&
        movements.map((movement, key) => {
          return (
            <MoveItem key={`${key}-movements`}>{movement.move.name}</MoveItem>
          );
        })}
    </ul>
  );
}

export default MoveList;
