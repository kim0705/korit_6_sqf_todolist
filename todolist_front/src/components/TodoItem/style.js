import { css } from "@emotion/react";

export const todoCheck = css`
    min-width: 25px;
    margin-right: 10px;
    cursor: pointer;

    /* 체크박스가 체크된 경우 입력 필드에 줄 그어지기 */
    &:checked + .content {
        text-decoration: line-through; /* 체크된 경우 줄 그어지기 */
        color: gray; /* 체크된 항목 색상 변경 */
        background-color: #f0f0f0; 
        text-decoration-thickness: 2px;
    }

    /* 체크박스 체크 시 배경색 변경 */
    &:checked {
        accent-color: #a3c2e5; /* 체크박스의 색상 변경 */
    }
`;

export const todoContent = css`
	max-width: 300px; /* 최대 너비 설정 */
    min-width: 300px;
    overflow-wrap: break-word;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 5px;
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    font-size: 35px;
    color: #333333;
`;

export const todoDate = css`
	text-align: center;
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    font-size: 25px;
`;