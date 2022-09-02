import styled from "styled-components";

export const MyButton = styled.button`
border: 1px solid black;
display: inline-block;
padding:6px 12px;
border-radius: 4px;
background: ${props => props.bg ? 'green' : 'red'};
cursor: pointer;
outline: none;
`
export const Bell = styled.div`
height: 50px;
width: 20px;
border: 1px solid black;
margin-left: 50%;
transform: translateX(-50%);
margin-top: 30px;
`