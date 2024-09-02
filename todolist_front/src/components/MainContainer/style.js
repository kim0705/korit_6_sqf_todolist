import { css } from "@emotion/react";

export const container = css`
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        height: 100px;
    }

    .input-box {
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        display: flex;
        width: 100%;
        height: 70px;
    }

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
    }




    table th:nth-of-type(1) {
        width: 30px;
    }

    table th:nth-of-type(2) {
        width: 300px;
    }

    table th:nth-of-type(3) {
        width: 90px;
    }

    table th:nth-of-type(4) {
        width: 40px;
    }

    table th:nth-of-type(5) {
        width: 40px;
    }

    .sc-box {    
        display: flex;
    }

    .sc { 
        display: flex;
        align-items: center;
        margin-left: auto;
        background-color: #ffffff;
       
        border: none;

        &:hover {
            background-color: #fafafa;
        }
        &:active{
            background-color: #dbdbdb;
        }
    }

    td {
        text-align: left; /* 텍스트 왼쪽 정렬 */
        padding: 10px;
        margin-bottom: 5px;
    }

    
    /* 체크박스가 체크된 경우 입력 필드에 줄 그어지기 */
    .todo-check:checked + .content {
        text-decoration: line-through; /* 체크된 경우 줄 그어지기 */
        color: gray; /* 체크된 항목 색상 변경 */
        background-color: #f0f0f0; 
        text-decoration-thickness: 2px;
    }

    /* 체크박스 체크 시 배경색 변경 */
    .todo-check:checked {
        accent-color: #a3c2e5; /* 체크박스의 색상 변경 */
    }

    button {
        height: 100%;
        width: 30px;
        padding: 4px 6px;
        margin-left: 12px;
        color: #2f4fbb;
        border: none;
    } 

    .list-container {
        position: relative;
        display: flex;
        flex-grow: 1;
        flex-direction: row;
        justify-content: center;
        margin-top: 100px;
        margin-left: 40px;
    }

    .update-content {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        width: 100%;
        max-width: 400px;
        font-family: 'GangwonEduSaeeum_OTFMediumA';
    }

`;