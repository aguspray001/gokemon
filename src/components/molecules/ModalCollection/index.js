/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "components/atoms/Button";
import { ImageEffect } from "components/atoms/Card/style";
import { line } from "styles/utilities";
import MoveList from "../MoveList";
import { body, footer, header, modalContainer, modalContent } from "./style";

function ModalCollection({ onShow, imgSource, onClose, onRelease, movements }) {
  return (
    <div id="modal-collection" css={modalContainer(onShow)}>
      <div css={modalContent} className="modal-content">
        <div css={header}>
          <span css={css`margin-bottom:10px;`}>Pokemon Colletion</span>
          <div css={line}></div>
        </div>
        <div css={body}>
            <img width={150} height={150} src={imgSource} css={ImageEffect} alt="pokemon" />
            <div css={css`display:flex; flex-direction: column; align-items:center;`}>
              <p>Movements</p>
              <div css={css`
                  max-height: 150px;
                  overflow-y: scroll;
                  text-align: center;
                  margin-top: 10px;
              `}>
                  <MoveList movements={movements}/>
              </div>
            </div>
        </div>
        <div css={footer}>
          <Button title="Close" onClick={onClose}/>
          <Button title="Release" onClick={onRelease}/>
        </div>
      </div>
    </div>
  );
}

export default ModalCollection;
