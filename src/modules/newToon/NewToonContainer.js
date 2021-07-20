import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Empty from '../../components/Empty';
import useDetailToon from '../../hooks/useDetailToon';
import { detailMyToon, oepnDetailMyToon, removeMyToon } from '../../store/webtoon/webtoon';
import NewToon from './NewToon';

const newToon = [
    {
        title: '한림 체육관',
        writer: '혜성/이석재',
        bookmark: '42',
        url: 'https://comic.naver.com/webtoon/list?titleId=743139',
        imageUrl: 'https://shared-comic.pstatic.net/thumb/webtoon/743139/thumbnail/thumbnail_IMAG06_b5984535-3131-49e9-9159-6c778f44eacd.jpg',
    },
    {
        title: '한림 체육관',
        writer: '혜성/이석재',
        bookmark: '22',
        url: 'https://comic.naver.com/webtoon/list?titleId=743139',
        imageUrl: 'https://shared-comic.pstatic.net/thumb/webtoon/743139/thumbnail/thumbnail_IMAG06_b5984535-3131-49e9-9159-6c778f44eacd.jpg',
    },
    {
        title: '한림 체육관',
        writer: '혜성/이석재',
        bookmark: '53',
        url: 'https://comic.naver.com/webtoon/list?titleId=743139',
        imageUrl: 'https://shared-comic.pstatic.net/thumb/webtoon/743139/thumbnail/thumbnail_IMAG06_b5984535-3131-49e9-9159-6c778f44eacd.jpg',
    }
];

function NewToonContainer() {
    const { loading, data, error } = useSelector(state => state.webtoon).myToon;
    const { selectToon, data: detailToonList } = useSelector(state => state.webtoon).detailMyToon;
    const dispatch = useDispatch();
    const { onClickDetail, onClickDelete } = useDetailToon();

    if (error) return <div>에러발생</div>;
    if (!data) return <div>등록한 웹툰이 없습니다.</div>

    return loading
        ? <div>로딩중...</div>
        : <NewToon newToon={data.map(toon => toon).slice(0, 3)} onClickDelete={onClickDelete} onClickDetail={onClickDetail} />;
};

export default NewToonContainer;