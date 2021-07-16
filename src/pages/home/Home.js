import React from 'react';
import InfoSectionContainer from '../../modules/infoSection/InfoSectionContainer';
import MainBannerContainer from '../../modules/mainBanner/MainBannerContainer';
import ToonmoaAdd from '../../modules/toonmoaAdd/ToonmoaAdd';

function Home() {
    return (
        <div>
            <MainBannerContainer />
            <InfoSectionContainer />
            <ToonmoaAdd />
        </div>
    );
};

export default Home;
