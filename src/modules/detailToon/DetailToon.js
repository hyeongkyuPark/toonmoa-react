import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import DetailToonItem from '../../components/DetailToonItem';
import Empty from '../../components/Empty';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import SectionSubTitle from '../../components/SectionSubTitle';
import useScrollBottom from '../../hooks/useScrollBottom';

const Info = styled.div`
    display: flex;
    margin-bottom: 3rem;
`;
const Image = styled.div`
    flex: 0 0 auto;
    width: 25%;
    height: 12rem;
    background: url('${({ imageUrl }) => imageUrl}') no-repeat center center;
    background-size: cover;
    margin-right: auto;
`;
const ToonList = styled.ul`
    margin-top: 1.5rem;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
`;
const TextArea = styled.div`
    flex: 0 0 auto;
    width: 71%;
    h2 {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1rem;
        em {
            font-size: 1rem;
            padding-left: 1rem;
        }
    }
    p {
        font-size: 1rem;
        line-height: 1.4em;
    }
`;

const DetailToonBlock = styled.div`
    position: relative;
    width: 70rem;
    height: 40rem;
    padding: 3rem;
    background: #fff;
    overflow: auto;
`;

const DetailModal = styled(Modal)`
    display: ${({ isOpend }) => {
        return isOpend || 'none';
    }};
`;

const CloseButton = styled.button`
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    border: none;
    outline: none;
    text-indent: -9999px;
    background: url('./images/icon_close.png') no-repeat center center;
    background-size: contain;
`;

function DetailToon({
    isOpend,
    selectToon,
    loading,
    data,
    error,
    onClickClose,
    detailBlockRef,
    toonListRef,
    itemCount,
}) {
    if (selectToon === null) return null;

    return (
        <DetailModal isOpend={isOpend}>
            <CloseButton onClick={onClickClose}>닫기</CloseButton>
            <DetailToonBlock ref={detailBlockRef}>
                <Info>
                    <Image imageUrl={selectToon.imageUrl} />
                    <TextArea>
                        <h2>{selectToon.title} <em>{selectToon.writer}</em></h2>
                        <p>
                            {selectToon.description}
                        </p>
                    </TextArea>
                </Info>
                <SectionSubTitle>웹툰목록</SectionSubTitle>
                <ToonList ref={toonListRef}>
                    {
                        loading
                            ? <li><Loading /></li>
                            : data === null || data.length === 0
                                ? <Empty>밀린 웹툰이 없습니다.</Empty>
                                : data.map(item => item).slice(0, itemCount).map(item => <DetailToonItem key={item} toon={item} />)
                    }
                </ToonList>
            </DetailToonBlock>
        </DetailModal>
    )
};

export default DetailToon;