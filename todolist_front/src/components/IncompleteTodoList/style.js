import { css } from "@emotion/react";

export const list = css`
	position: relative;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden; /* 수평 스크롤바 숨기기 */
    box-sizing: border-box;
    border: 2px solid #D6E0F0;
    border-radius: 10px;
    margin-right: 40px;
    width: 600px;
    height: 700px;
    background-color: white;

	& h2 {
        padding: 6px;
        margin-left: 30px ;
        border-bottom: 4px solid #D6E0F0;
        margin-left: 30px ;
        color: #a3c2e5;
        text-shadow: 
        1px 1px 0 #000000, /* 왼쪽 아래 */
        1px -1px 0 #000000, /* 오른쪽 위 */
        1px -1px 0 #000000, /* 오른쪽 아래 */
        -1px 1px 0 #000000; /* 왼쪽 위 */
        font-family: 'GangwonEduSaeeum_OTFMediumA';
        font-size: 50px;
    }

	& thead {
        padding:0;
        margin: 24px;
    }

	& tr {
        position: relative;
		display: flex;
        justify-content: space-between;
        text-align: center;
        width: auto;
        margin:8px;
        padding: 6px;
        border-bottom: 2px solid #D6E0F0;
    }

    & th {
        font-family: 'GangwonEduSaeeum_OTFMediumA';
        background-color: #f4f4f4;
    }

    & table {
        width: 100%;
    }

	&::-webkit-scrollbar {
        display: none;
    }

`; 

export const scBox = css`
	display: flex;
`;