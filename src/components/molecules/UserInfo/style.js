import { css } from "@emotion/react";

export const userInfoStyle = css`
    padding: 0.5rem 1rem 0.7rem 1rem;
    background-color: rgba(0, 0, 255, 0.4);
    border: 2px solid black;
    border-radius:0.4rem;
    position: fixed;
    right: 15%;
    top: 10px;
    z-index: 9999;

    @media (min-width: 480px){
        max-width: 50%;
        right: 20px;
    }
`

export const userInfoContainer = css`
    display: flex;
    flex-direction: column;

    span{
        font-size:0.7rem;
        margin-top: 1rem;
    }
`