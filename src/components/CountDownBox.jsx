import React, { useState } from "react"
import styled from "styled-components"

const BoxRoot = styled.div`
    display:flex;
    width: 100%;
    height:250px;
    background-color: #00afab;
    justify-content:center;
    align-items:center;

`
const ButtonWrap = styled.button`
    display:inline-block;
    margin:10px 20px;
    width:100px;
    height:50px;
`
export default function CountDownBox() {
    const [count, setCount] = useState(0)

    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1 style={ { "text-align": "center", "fontSize": 40, "margin": "20px 0" } }>Use State , useEffect</h1>
            <BoxRoot>
                <ButtonWrap onClick={ decrement }>-</ButtonWrap>
                { count }
                <ButtonWrap onClick={ increment }>+</ButtonWrap>
            </BoxRoot>

        </>
    )
    /**
        props:
        - Giá trị truyền từ C cha sang C con
        - Không thể thay đổi props
        - Tạo ra sự đa dạng Component

        state:
        -Giữ giá trị trạng thái cưa C ,khi state thay đổi , C re-render ra UI
        -state được thay đổi qua hàm séttate tương ứng

        useEffect:
        -depenencylist: gía trị phụ thuộc, giá trị thay đổi thì useEffect thực thi lại
        -mounted/unmounted
        -lắng nghe sự thay đổi của 1 state hoặc props
    
    */
}
