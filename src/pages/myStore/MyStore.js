import React from 'react';
import DetailToonContainer from '../../modules/detailToon/DetailToonContainer';
import MyToonContainer from '../../modules/myToon/MyToonContainer';
import NewToonContainer from '../../modules/newToon/NewToonContainer';
import ToonmoaAddContainer from '../../modules/toonmoaAdd/ToonmoaAddContainer'

function MyStore() {
    return (
        <div>
            <NewToonContainer />
            <ToonmoaAddContainer />
            <MyToonContainer />
            <DetailToonContainer />
        </div>
    );
};

export default MyStore;
