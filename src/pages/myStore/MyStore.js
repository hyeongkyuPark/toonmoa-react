import React from 'react';
import MyToonContainer from '../../modules/myToon/MyToonContainer';
import NewToonContainer from '../../modules/newToon/NewToonContainer';
import ToonmoaAddContainer from '../../modules/toonmoaAdd/ToonmoaAddContainer'

function MyStore() {
    return (
        <div>
            <NewToonContainer />
            <ToonmoaAddContainer />
            <MyToonContainer />
        </div>
    );
};

export default MyStore;
