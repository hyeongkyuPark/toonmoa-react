import React from 'react';
import styled, { css } from 'styled-components';

const Image = styled.div`
    width: 100%;
    height: 15rem;
    background: url('${({ imageUrl }) => imageUrl}') no-repeat center center;
    background-size: cover;
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
    transform: translateY(100%);
    transition: transform 0.3s;
`;
const Info = styled.div`
    text-align: left;
    h3 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }
`;
const Bookmark = styled.div`
    text-align: right;
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
    background: url('./images/logo_${({ site }) => site}.png') no-repeat center center;
    background-size: contain;
`;
const Delete = styled.button`
    cursor: pointer;
    width: 2.2rem;
    height: 2.2rem;
    background: none;
    outline: none;
    border: none;
    padding: 0.3rem;
    background-color: rgba(255, 255, 255, 0.7);
    border: 1px solid #222;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
`;
const DeleteButton = styled.span`
    display: block;
    width: 100%;
    height: 100%;
    background: url('./images/icon_delete.png') no-repeat center center;
    background-size: contain;
`;

const ToonItemBlock = styled.li`
    cursor: pointer;
    position: relative;
    background: #555;
    border-radius: 10px;
    overflow: hidden;
    &:hover {
        ${Delete} {
            opacity: 1;
        }
        ${TextArea} {
            transform: translateY(0);
        }
    }

    ${({ toonCount }) => {
        const height = Math.floor(45 / toonCount);

        return css`
            ${Image} {
                height: ${height}rem;
            }
        `
    }}

    ${({ toonCount }) => {
        if (toonCount === 4) {
            return css`
                ${TopMenu} {
                    top: 0.5rem;
                    padding: 0 1rem;
                }
                ${Logo} {
                    width: 4rem;
                    height: 1.4rem;
                }
                ${Delete} {
                    width: 1.8rem;
                    height: 1.8rem;
                }
                ${TextArea} {
                    padding: 1rem;
                }
                ${Info} {
                    h3 {
                        font-size: 1rem;
                    }
                }
                ${Bookmark} {
                    p {
                        font-size: 0.8rem;
                    }
                }
            `;
        }
    }}
`;

function ToonItem({ toonCount, toon, onClickDelete, onClickDetail }) {
    return (
        <ToonItemBlock toonCount={toonCount} onClick={(e) => onClickDetail(e, toon)}>
            <Image imageUrl={toon.imageUrl} />
            <TopMenu>
                <Logo site={toon.site}></Logo>
                <Delete onClick={() => onClickDelete(toon.id)}>
                    <DeleteButton />
                </Delete>
            </TopMenu>
            <TextArea>
                <Info>
                    <h3>{toon.title}</h3>
                    <p>{toon.writer}</p>
                </Info>
                <Bookmark>
                    <p>북마크</p>
                    <p>{toon.bookmark}화</p>
                </Bookmark>
            </TextArea>
        </ToonItemBlock>
    )
};

ToonItem.defaultProps = {
    toonCount: 4,
}

export default ToonItem;