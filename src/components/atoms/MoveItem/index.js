/** @jsxImportSource @emotion/react */
import React from 'react'
import { listStyle } from './style';

function MoveItem({children}) {
    return (
        <li css={listStyle}>{children}</li>
    )
}

export default MoveItem;
