import styled from "styled-components";

export const Conteiner = styled.a`
    
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    border-radius: 0.25rem;
    color: var(--text-body);

    align-items: left;
    text-decoration: none;
    display: flow-root;

    img{
        max-width: 250px;
        object-fit: contain;
        margin-right: 1rem;
        float:left;
    }    

    span, a, strong {
       display: block;
       margin-bottom: 1rem;
    }
`