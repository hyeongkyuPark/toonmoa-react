import { useEffect, useState } from 'react';


function useScroll(el) {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const checkFixed = () => {
            let elemBottomPostionY = el.getBoundingClientRect().bottom;
            let elemHeight = el.getBoundingClientRect().height;

            if (elemBottomPostionY <= 0) {
                setIsFixed(true);
                document.body.style.paddingTop = `${elemHeight}px`;
            } else if (window.pageYOffset === 0) {
                setIsFixed(false);
                document.body.style.paddingTop = '0px';
            }
        }

        if (el !== null) {
            window.addEventListener('scroll', checkFixed);
        }

        return () => window.removeEventListener('scroll', checkFixed);
    }, [el]);

    return isFixed;
}

export default useScroll;
