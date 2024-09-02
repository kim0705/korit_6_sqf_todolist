import { css } from "@emotion/react";

export const todoCheck = css`
    min-width: 25px;
    margin-right: 10px;
    cursor: pointer;
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