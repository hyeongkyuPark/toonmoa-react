import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDetailToon from '../../hooks/useDetailToon';
import { detailMyToon, getMyToon, removeMyToon, oepnDetailMyToon } from '../../store/webtoon/webtoon';
import MyToon from './MyToon';

function MyToonContainer() {
    const { loading, data, error } = useSelector(state => state.webtoon).myToon;
    const { selectToon, data: detailToonList } = useSelector(state => state.webtoon).detailMyToon;
    const dispatch = useDispatch();
    const [active, setActive] = useState('mon');
    const [category, setCategory] = useState('day');
    const { onClickDetail, onClickDelete } = useDetailToon();

    const onClickMenu = (e) => {
        if (e.target.tagName !== 'LI') return;
        if (e.target.dataset.title === active) return;
        setActive(e.target.dataset.title);
    }

    const onClickCategory = (e) => {
        if (e.target.tagName !== 'BUTTON') return;
        if (e.target.dataset.title === category) return;
        setCategory(e.target.dataset.title);
        setActive(e.target.dataset.initial);
    }

    useEffect(() => {
        dispatch(getMyToon());
    }, [dispatch]);

    if (loading) return <div>로딩중</div>
    if (error) return <div>에러발생</div>
    if (!data) return <div>웹툰 없음</div>

    return <MyToon
        myToon={data}
        onClickMenu={onClickMenu}
        onClickCategory={onClickCategory}
        active={active}
        category={category}
        onClickDelete={onClickDelete}
        onClickDetail={onClickDetail}
    />
};

export default MyToonContainer;