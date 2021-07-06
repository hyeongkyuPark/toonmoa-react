import React from 'react';
import styled, { css } from 'styled-components';

const BannerBlock = styled.section`
    width: 100%;
    height: 25rem;
    background: #eee;
    & > h2 {
        width: 0;
        height: 0;
        overflow: hidden;
    }
`;

const BannerWrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    overflow: hidden;
`;

const BannerList = styled.ul`
    flex: 0 0 auto;
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;

    ${({ slideX }) => css`
        transform: translateX(${slideX}%);
    `}
`;

const BannerItem = styled.li`
    text-indent: -9999px;
    flex: 0 0 auto;
    width: 100%;
    height: 100%;
    ${({imageUrl}) => css`
        background: url("${imageUrl}");
    `}
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;

const Arrow = styled.button`
    cursor: pointer;
    position: absolute;
    width: 3rem;
    height: 3rem;
    background: url("./images/icon_arrow.png") no-repeat center center;
    background-size: contain;
    outline: none;
    border: none;
`;

const LeftArrow = styled(Arrow)`
    left: 0;
`;
const RightArrow = styled(Arrow)`
    right: 0;
    transform: rotate(180deg);
`;

function MainBanner({
    bannerList,
    slideLeft,
    slideRight,
    slideX
}) {
    return (
        <BannerBlock>
            <h2>메인배너영역</h2>
            <BannerWrapper>
                <BannerList slideX={slideX}>
                    {bannerList.map((bannerItem) => (
                        <BannerItem key={bannerItem.id} imageUrl={bannerItem.imageUrl}>{bannerItem.title}</BannerItem>
                    ))}
                </BannerList>
                <LeftArrow onClick={slideLeft} />
                <RightArrow onClick={slideRight} />
            </BannerWrapper>
        </BannerBlock>
    );
};

export default MainBanner;
