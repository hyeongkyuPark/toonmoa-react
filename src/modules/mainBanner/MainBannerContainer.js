import React, { useEffect, useState } from 'react';
import MainBanner from './MainBanner';

const bannerData = [
    {
        id: 1,
        title: '네이버 웹툰 지원',
        imageUrl: './images/banner_naver.jpg',
    },
    {
        id: 2,
        title: '다음 웹툰 지원',
        imageUrl: './images/banner_daum.jpg',
    },
    {
        id: 3,
        title: '레진 코믹스 지원',
        imageUrl: './images/banner_lezhin.jpg',
    },
]

function MainBannerContainer() {
    const [bannerList, setBannerList] = useState([]);
    const [slideX, setSlideX] = useState(0);

    const getSliderMaxMin = () => {
        return {
            max: -((bannerList.length - 1) * 100),
            min: 0
        };
    }

    const slideLeft = () => {
        const { max, min } = getSliderMaxMin();
        let moveX = slideX;

        if (moveX + 100 > min) {
            moveX = max;
        } else {
            moveX += 100;
        }

        setSlideX(moveX);
    }
    const slideRight = () => {
        const { max, min } = getSliderMaxMin();
        let moveX = slideX;

        if (moveX - 100 < max) {
            moveX = min;
        } else {
            moveX -= 100;
        }

        setSlideX(moveX);
    }

    useEffect(() => {
        if (bannerList.length !== 0) return;
        setTimeout(() => {
            setBannerList(bannerList => bannerList.concat(bannerData));
        }, 0);
    }, [bannerList])

    return <MainBanner bannerList={bannerList} slideLeft={slideLeft} slideRight={slideRight} slideX={slideX} />
};

export default MainBannerContainer;
