import { css } from "@emotion/react";

export const todoCheck = css`
    min-width: 25px;
    margin-right: 10px;
    cursor: pointer;

    /* 체크박스가 체크된 경우 입력 필드에 줄 그어지기 */
    &:checked + td {
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
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    font-size: 35px;
    color: #333333;
    text-align: left; /* 텍스트 왼쪽 정렬 */
    padding: 10px;
    margin-bottom: 5px;
`;

export const todoDate = css`
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    font-size: 25px;
    text-align: left; /* 텍스트 왼쪽 정렬 */
    padding: 10px;
    margin-bottom: 5px;
`;