import { css } from "@emotion/react";

export const registerBox = css`
	position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin-top: 10px;
`;

export const registerInput = css`
	display: flex;
    justify-content: center;
    border-radius: 10px;
    box-sizing: border-box;
    border: 2px solid #D6E0F0;
    margin: 30px 60px 30px 30px;
    padding: 10px 20px;
    width: 50%;
    height: 80%;
    font-size: 40px;
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    &:focus {
        background-color: #D6E0F0; /* 클릭 시 배경 색상 변경 */
    }
`;

export const registerDate = css`
    box-sizing: border-box;
    width: 250px;
    height: 80%;
    margin: 20px 40px;
    padding: 10px 20px;
    border: 2px solid #D6E0F0;
    border-radius: 8px;
    text-align: center;
    font-family: 'GangwonEduSaeeum_OTFMediumA';
    font-size: 35px;
    cursor: pointer;
`;