/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Button from "components/atoms/Button";
import React from "react";
import { useLocation } from "react-router-dom";
import { showNotif } from "utils/showNotif";
import InputForm from "../../atoms/InputForm";
import { userInfoContainer, userInfoStyle } from "./style";

function UserInfo({ owned, value, onConfirm, isEdit, ...rest }) {
  
  const location = useLocation();

  return (
    <div css={userInfoStyle}>
      <div css={userInfoContainer}>
        {isEdit ? (
          <InputForm {...rest} value={value} />
        ) : (
          <div
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <div
              css={css`
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                margin-right: 10px;
              `}
            >
              <span>Name: {value}</span>
            </div>
            <Button title="Edit" onClick={onConfirm} />
          </div>
        )}
        <span
          css={css`
            margin-bottom: 10px;
          `}
        >
          Your Pokemon : {owned}
        </span>
        <div css={css`
            position: absolute;
            bottom: -20px;
            right: 0;
            display: flex;
        `}>
          <Button
            title="Home"
            href="/"
            type="link"
            onClick={() => {
              if (location.pathname === "/") {
                showNotif({
                  message: "You were in the home page!",
                  type: "error",
                });
              }
            }}
          />
            <Button
            title="Collection"
            href="/mypokemon"
            type="link"
            onClick={() => {
              if (location.pathname === "/mypokemon") {
                showNotif({
                  message: "You have been in the pokemon collection page!",
                  type: "error",
                });
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
