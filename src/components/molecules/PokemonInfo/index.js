/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import MoveList from "../MoveList";
import React from "react";
import { flex, flexCenter, flexCol, line } from "styles/utilities";
import { pokemonInfoWrapper, imageBorder, typeBox } from "./style";

function PokemonInfo({ imgSource, type, movements }) {
  return (
    <div css={[flex, flexCol, pokemonInfoWrapper, flexCenter]}>
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 1rem;
        `}
      >
        <figure css={imageBorder}>
          <img src={imgSource} alt="pokemon" />
        </figure>
        <div>
          {type.map((t,k) => {
            return (
              <div
                key={`${t.type.name}-${k}`}
                css={typeBox(t.type.name)}
              >
                <p>{t.type.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div css={line} />
      <span>Movements</span>
      <div
        css={css`
          height: 200px;
          overflow-y: scroll;
        `}
      >
        <MoveList movements={movements} />
      </div>
    </div>
  );
}

export default PokemonInfo;
