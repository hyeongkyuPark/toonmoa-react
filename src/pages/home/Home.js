import React from 'react';
import InfoSectionContainer from '../../modules/infoSection/InfoSectionContainer';
import MainBannerContainer from '../../modules/mainBanner/MainBannerContainer';
import RecommendSectionContainer from '../../modules/RecommendSection/RecommendSectionContainer';
import ToonmoaAddContainer from '../../modules/toonmoaAdd/ToonmoaAddContainer';

function Home() {
    return (
        <div>
            <MainBannerContainer />
            <InfoSectionContainer />
            <ToonmoaAddContainer />
            <RecommendSectionContainer />
        </div>
    );
};

export default Home;
