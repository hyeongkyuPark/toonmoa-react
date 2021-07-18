import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import SectionSubTitle from '../../components/SectionSubTitle';
import Container from '../../components/Container';
import ToonItem from '../../components/ToonItem';

const ToonList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 1rem;

    @media ${({ theme }) => theme.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media ${({ theme }) => theme.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const NewToonBlock = styled.div`
    padding: 5rem 0;
`;

function NewToon({ newToon }) {
    return (
        <NewToonBlock>
            <SectionTitle>새로 등록한 <em>웹툰</em></SectionTitle>
            <Container>
                <SectionSubTitle>신규등록 웹툰</SectionSubTitle>
                <ToonList>
                    {newToon.map((toon, idx) => <ToonItem key={idx} toon={toon} toonCount={3} />)}
                </ToonList>
            </Container>
        </NewToonBlock>
    )
};

export default NewToon;