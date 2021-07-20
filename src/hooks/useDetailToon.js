import { useDispatch, useSelector } from 'react-redux';
import { detailMyToon, removeMyToon, oepnDetailMyToon } from '../store/webtoon/webtoon';

function useDetailToon() {
    const { selectToon, data: detailToonList } = useSelector(state => state.webtoon).detailMyToon;
    const dispatch = useDispatch();

    const onClickDetail = (e, toon) => {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'SPAN') return;
        console.log(e.target.tagName);
        if (detailToonList !== null) {
            if (selectToon.id === toon.id) {
                dispatch(oepnDetailMyToon());
                return;
            };
        }
        dispatch(detailMyToon(toon));
    }

    const onClickDelete = (id) => {
        dispatch(removeMyToon(id));
    }

    return { onClickDetail, onClickDelete };
};

export default useDetailToon;