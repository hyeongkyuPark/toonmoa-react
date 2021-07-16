import React from 'react';
import styled from 'styled-components';
import InfoItem from '../../components/InfoItem';
import SectionTitle from '../../components/SectionTitle';

const InfoSectionBlock = styled.section`
    padding: 6rem 0;
`;

const InfoList = styled.ul`
    display: flex;
    justify-content: center;

    @media ${({ theme }) => theme.mobile} {
        flex-wrap: wrap;
    }
`;

function InfoSection({ infomationCount }) {
    return (
        <InfoSectionBlock>
            <SectionTitle>information</SectionTitle>
            <InfoList>
                <InfoItem imageSource='site' title='site count' count={infomationCount.site} />
                <InfoItem imageSource='toon' title='toon count' count={infomationCount.toon} />
                <InfoItem imageSource='visit' title='visit count' count={infomationCount.visit} />
                <InfoItem imageSource='user' title='user count' count={infomationCount.user} />
            </InfoList>
        </InfoSectionBlock>
    )
};

export default InfoSection;
