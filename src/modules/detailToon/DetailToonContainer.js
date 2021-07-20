import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useScrollBottom from '../../hooks/useScrollBottom';
import { closeDetailMyToon } from '../../store/webtoon/webtoon';
import DetailToon from './DetailToon';

function DetailToonContainer() {
    const [toonListElem, setToonListElem] = useState(null);
    const [detailBlockElem, setEetailBlockElem] = useState(null);
    const { itemCount, setItemCount } = useScrollBottom(detailBlockElem, toonListElem, 10);
    const { isOpend, selectToon, loading, data, error } = useSelector(state => state.webtoon).detailMyToon;
    const dispatch = useDispatch();

    const detailBlockRef = useCallback(node => {
        if (node !== null) {
            setEetailBlockElem(node);
        }
    }, []);

    const toonListRef = useCallback(node => {
        if (node !== null) {
            setToonListElem(node);
        }
    }, []);
    const onClickClose = () => {
        dispatch(closeDetailMyToon());
        setItemCount(10);
        detailBlockElem.scrollTo(0, 0);
    }

    return <DetailToon
        isOpend={isOpend}
        selectToon={selectToon}
        loading={loading}
        data={data}
        error={error}
        onClickClose={onClickClose}
        itemCount={itemCount}
        detailBlockRef={detailBlockRef}
        toonListRef={toonListRef}
    />
};

export default DetailToonContainer;