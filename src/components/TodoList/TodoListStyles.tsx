import styled from "styled-components"

export const Todo = styled.div`
    text-align: center;
`

export const Title = styled.h3`
    font-size: 50px;
`

export const Li = styled.li`
    list-style-type: none;
    display: flex;
    justify-content: center;
`

export const Div = styled.div`
    display: inline-block;
    height: 40px;
    margin: 10px 0;
`

export const Input = styled.input`
    width: 400px;
    height: 40px;
    font-size: 15px;
`

export const EditButton = styled.button`
    width: auto;
    height: 42px;
    color: white;
    background-color:  #10c0a3;
    font-size: 15px;
    border: 0;
`

export const DeleteButton = styled.button`
    width: auto;
    height: 42px;
    color: white;
    background-color: red;
    font-size: 15px;
    border: 0;
`

export const SaveButton = styled.button`
    width: auto;
    height: 46px;
    color: white;
    background-color: #0fb3ff;
    font-size: 15px;
    border: 0;
`

export const TaskTitle = styled.span<{ isDone: boolean }>`
    width: 348px;
    height: 40px;
    border: solid black 1px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    text-decoration: ${props => props.isDone ? "line-through" : "none"};
`

export const Ul = styled.ul`
    padding-left: 0;
`

export const Search = styled.input`
    width:  250px;
    height: 40px;
    font-size: 15px;
    padding-left: 10px;
`

export const Sort = styled.button`
    margin-top: 10px;
    width: 133px;
    height: 46px;
    font-size: 15px;
`