import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    padding-left: 30px;
    padding-right: 30px;
    width: 1200px;
    margin: 0 auto;
    .heading{
        font-size: 32px;
        font-weight: bold;
        margin: 20px 0;
    }
    .sub-heading{
        font-weight: bold;
    }
`

const ToDoListRoot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    .input-group{
        display: flex;
        height: 50px;
        border: 1px solid #3333;
        width: 100%;

        &>input{
            border: none;
            outline: none; 
            width: 80%;
            height: 100%;
            padding-left: 10px;
        }
        &>button{
            background-color: #00afab;
            color: #fff;
            height: 100%;
            border: none;
            width: 20%; 
            cursor: pointer;
        }   
    }
`
const CardRoot = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

`
const CardToDoList = styled.div`
    
`
export default function ToDoList({ toDoList }) {
    return (
        <>
            <h1 style={ { "textAlign": "center", "fontSize": 48, "margin": "24px 0" } }>To Do List </h1>
            <Container>
                <ToDoListRoot>
                    <div className="input-group">
                        <input type="text" className="text" placeholder="Add Jobs.." />
                        <button disabled="disabled"> Add</button>
                    </div>
                </ToDoListRoot>
                <h1 className='heading'>Dashboard:</h1>
                <CardRoot>
                    <CardToDoList>
                        <h2 className='sub-heading'>Jobs to do:</h2>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </CardToDoList>
                    <CardToDoList>
                        <h2 className='sub-heading'>Jobs is completed:</h2>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </CardToDoList>
                </CardRoot>
            </Container>
        </>

    )
}
