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