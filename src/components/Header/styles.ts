import styled from "styled-components";

export const Conteiner = styled.header`
    background: var(--blue);
`
export const Content = styled.form`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 11rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 4rem;
        margin-left: 1rem;

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9);
        }
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placehoder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }
`