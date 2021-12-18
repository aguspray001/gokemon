/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { inputStyle } from './style'

function InputForm({title, ...rest}) {
    return (
        <div css={css`display:flex; flex-direction-row; align-items:center;`}>
            <label css={css`font-size:0.7rem; margin-right: 1rem;`} htmlFor={title}>{title}:</label>
            <input css={inputStyle} id={title} type="text" {...rest}/>
        </div>
    )
}

export default InputForm
