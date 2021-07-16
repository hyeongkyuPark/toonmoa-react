import React from 'react';
import InfoSection from './InfoSection';

const infomationCount = {
    site: 3,
    toon: 140,
    visit: 100,
    user: 20
}

function InfoSectionContainer() {
    return <InfoSection infomationCount={infomationCount} />
}

export default InfoSectionContainer;