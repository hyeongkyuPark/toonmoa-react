import React from 'react';
import styled, { css } from 'styled-components';

const Image = styled.div`
    width: 100%;
    height: 15rem;
`;

const TextArea = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.5rem 1rem;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
`;
const Info = styled.div`
    h3 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }
`;
const Bookmark = styled.div`
    p {
        &:not(:last-child) {
            margin-bottom: 0.3rem;
        }
    }
`;

const TopMenu = styled.div`
    position: absolute;
    top: 1rem;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 2rem;
`;
const Logo = styled.div`
    width: 5.5rem;
    height: 2.2rem;
    background: url('./images/logo_naver.png') no-repeat center center;
    background-size: contain;
`;
const Delete = styled.button`
    width: 2.2rem;
    height: 2.2rem;
    background: none;
    outline: none;
    border: none;
    padding: 0.3rem;
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid #222;
    border-radius: 50%;
`;
const DeleteButton = styled.span`
    display: block;
    width: 100%;
    height: 100%;
    background: url('./images/icon_delete.png') no-repeat center center;
    background-size: contain;
`;

const ToonItemBlock = styled.li`
    position: relative;
    border: 1px solid #000;
    background: #555;
    border-radius: 10px;
    overflow: hidden;

    ${({ toonCount }) => {
        const width = Math.floor(100 / toonCount) - 1;
        const height = Math.floor(45 / toonCount);

        return css`
            width: ${width}%;
            ${Image} {
                height: ${height}rem;
            }
        `
    }}
`;

function ToonItem({ toonCount }) {
    return (
        <ToonItemBlock toonCount={toonCount}>
            <Image />
            <TopMenu>
                <Logo></Logo>
                <Delete>
                    <DeleteButton />
                </Delete>
            </TopMenu>
            <TextArea>
                <Info>
                    <h3>한림 체유관</h3>
                    <p>혜성 / 이석재</p>
                </Info>
                <Bookmark>
                    <p>북마크</p>
                    <p>42회</p>
                </Bookmark>
            </TextArea>
        </ToonItemBlock>
    )
};

ToonItem.defaultProps = {
    toonCount: 4,
}

export default ToonItem;