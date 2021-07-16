import React, { useState } from 'react';
import RecommendSection from './RecommendSection';

const webtoonList = [
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=772243',
        imageUrl: './images/01.png',
        title: '모스크바의 여명',
        writer: '황장미 / 이산오',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=557676',
        imageUrl: './images/02.png',
        title: '다이스(DICE)',
        writer: '윤현석',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=773067',
        imageUrl: './images/03.png',
        title: '제타',
        writer: '하지',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=765156',
        imageUrl: './images/04.png',
        title: '빌런투킬',
        writer: '퓨핀 / 은지',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
    },
]

function RecommendSectionContainer() {
    const [active, setActive] = useState('naver');

    const onClickMenu = (e) => {
        if (e.target.tagName !== 'LI') return;
        if (e.target.dataset.title === active) return;
        setActive(e.target.dataset.title);
    }

    return <RecommendSection webtoonList={webtoonList} active={active} onClickMenu={onClickMenu} />
}

export default RecommendSectionContainer;