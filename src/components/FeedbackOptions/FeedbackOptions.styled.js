import styled from "styled-components";

export const ButtonList = styled.div`
    display: flex;
    gap: 10px;
`;

export const Button = styled.button`
    width: 100px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;

    :hover {
        background-color: tomato;
    }
`;