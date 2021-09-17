import { css } from 'solid-styled-components'

const flexBoxMixin = css`
    display: flex;
    width: 100%;
    flex-direction: column;

    @media(min-width: 48rem){
        width: 100%;
        padding:10px;
        flex-wrap: wrap;
        flex-direction: row;

    }
    
    @media(min-width: 67.5rem){
        width: 56rem;
        padding:0px;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export {flexBoxMixin}