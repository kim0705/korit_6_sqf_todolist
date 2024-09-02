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
	font-family: 'EF_jejudoldam';
    color: #a3c2e5;
    font-size: 50px;
    text-shadow: 
    2px 1px 0 #000000, /* 왼쪽 아래 */
    2px -1px 0 #000000, /* 오른쪽 위 */
    2px -2px 0 #000000, /* 오른쪽 아래 */
    -2px 2px 0 #000000; /* 왼쪽 위 */
`;