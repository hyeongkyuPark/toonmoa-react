import { useEffect, useState } from 'react';


function useScrollBottom(el, target, deps) {
    const [itemCount, setItemCount] = useState(deps);

    useEffect(() => {
        const infiniteScroll = () => {
            const targetBottomOffsetY = target.offsetTop + target.offsetHeight;
            const scrollTop = el.scrollTop + el.clientHeight;

            if (targetBottomOffsetY - scrollTop <= 0) {
                setItemCount(itemCount => {
                    setItemCount(itemCount + deps);
                });

            }

        }

        if (target !== null) {
            el.addEventListener('scroll', infiniteScroll);
        }
        return () => { return window.removeEventListener('scroll', infiniteScroll) };
    }, [target, el, deps]);

    return { itemCount, setItemCount };
}

export default useScrollBottom;
