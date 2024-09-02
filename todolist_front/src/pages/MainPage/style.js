import { css } from "@emotion/react";

export const container = css`
	position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
	box-sizing: border-box;
    width: 100%;
    height: 100px;
`;

export const listTitle = css`
    display: flex;
    justify-content: center;
    align-items: center;
	font-family: 'EF_jejudoldam';
    color: #a3c2e5;
    font-size: 60px;
    text-shadow: 
    2px 1px 0 #000000, /* 왼쪽 아래 */
    2px -1px 0 #000000, /* 오른쪽 위 */
    2px -2px 0 #000000, /* 오른쪽 아래 */
    -2px 2px 0 #000000; /* 왼쪽 위 */
`;

export const listContainer = css`
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    justify-content: center;
    margin-top: 100px;
    margin-left: 40px;
`;