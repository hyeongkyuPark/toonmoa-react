import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyToon } from '../../store/webtoon/webtoon';
import MyToon from './MyToon';

function MyToonContainer() {
    const { loading, data, error } = useSelector(state => state.webtoon).myToon;
    const dispatch = useDispatch();
    const [active, setActive] = useState('mon');

    const onClickMenu = (e) => {
        if (e.target.tagName !== 'LI') return;
        if (e.target.dataset.title === active) return;
        setActive(e.target.dataset.title);
    }

    useEffect(() => {
        dispatch(getMyToon());
    }, [dispatch]);

    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생</div>
    if (!data) return <div>웹툰 없음</div>

    return <MyToon myToon={data} onClickMenu={onClickMenu} active={active} category='day' />
};

export default MyToonContainer;