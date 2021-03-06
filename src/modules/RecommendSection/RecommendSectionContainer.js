import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecommendToon } from '../../store/webtoon/webtoon';
import RecommendSection from './RecommendSection';

function RecommendSectionContainer() {
    const { loading, data, error } = useSelector(state => state.webtoon).recommendToon;
    const [active, setActive] = useState('naver');

    const dispatch = useDispatch();

    const onClickMenu = (e) => {
        if (e.target.tagName !== 'LI') return;
        if (e.target.dataset.title === active) return;
        setActive(e.target.dataset.title);
    }

    useEffect(() => {
        dispatch(getRecommendToon());
    }, [dispatch]);

    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생</div>
    if (!data) return <div>웹툰 없음</div>

    return <RecommendSection webtoonList={data} active={active} onClickMenu={onClickMenu} />
}

export default RecommendSectionContainer;