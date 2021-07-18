import React from 'react';
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
    return <NewToon newToon={newToon} />
};

export default NewToonContainer;