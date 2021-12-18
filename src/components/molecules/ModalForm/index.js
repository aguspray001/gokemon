/** @jsxImportSource @emotion/react */
import Button from "components/atoms/Button";
import InputForm from "components/atoms/InputForm";
import React from "react";
import { body, footer, header, modalContainer, modalContent } from "./style";

function ModalForm({ onShow, onChangeName, onCatch, onRelease }) {
  return (
    <div css={modalContainer(onShow)}>
      <div css={modalContent} className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <div css={header}>
          <span>Give me a nickname, please!</span>
        </div>
        <div css={body}>
          <InputForm
            title="Name"
            placeholder="Pokemon name..."
            onChange={onChangeName}
          />
        </div>
        <div css={footer}>
          <Button title="Collect" onClick={onCatch}/>
          <Button title="Release" onClick={onRelease}/>
        </div>
      </div>
    </div>
  );
}

export default ModalForm;
