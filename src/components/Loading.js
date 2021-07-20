import React from 'react';
import styled, { keyframes } from 'styled-components';

const dotOnOff = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const LoadingBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 3rem 0;
    div {
        width: 8rem;
        height: 8rem;
        text-indent: -9999px;
        background: url('./images/loading_book.gif') no-repeat center center;
        background-size: contain;
        margin-bottom: 1.5rem;
    }
    p {
        width: 100%;
        text-align: center;
        font-size: 1rem;
        color: #4090dd;
        span {
            font-size: 1.5rem;
        }
        span:nth-child(2) {
            animation-name: ${dotOnOff};
            animation-duration: 1s;
            animation-iteration-count: infinite;

        }
        span:nth-child(3) {
            animation-name: ${dotOnOff};
            animation-duration: 0.5s;
            animation-delay: 0.5s;
            animation-iteration-count: infinite;

        }
    }
`;

function Loading() {
    return (
        <LoadingBlock>
            <div>로딩중</div>
            <p>LOADING<span>.</span><span>.</span><span>.</span></p>
        </LoadingBlock>
    );
};

export default Loading;