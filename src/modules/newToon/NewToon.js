import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import SectionSubTitle from '../../components/SectionSubTitle';
import Container from '../../components/Container';
import ToonItem from '../../components/ToonItem';

const ToonList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 0;
`;

const NewToonBlock = styled.div`
    padding: 5rem 0;
`;

function NewToon() {
    return (
        <NewToonBlock>
            <SectionTitle>새로 등록한 <em>웹툰</em></SectionTitle>
            <Container>
                <SectionSubTitle>신규등록 웹툰</SectionSubTitle>
                <ToonList>
                    <ToonItem toonCount={3} />
                    <ToonItem toonCount={3} />
                    <ToonItem toonCount={3} />
                </ToonList>
            </Container>
        </NewToonBlock>
    )
};

export default NewToon;