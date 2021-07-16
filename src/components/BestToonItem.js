import React from 'react';
import styled from 'styled-components';

const ToonitemBlock = styled.li`
    cursor: pointer;
    flex: 0 0 auto;
    width: 32%;
    margin-bottom: 1.5rem;
    h4 {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 0.3rem;
    }

    @media ${({ theme }) => theme.tablet} {
        width: 49%;
    }
    @media ${({ theme }) => theme.mobile} {
        width: 100%;
    }
`;
const Image = styled.div`
    width: 100%;
    height: 16rem;
    border-radius: 10px;
    margin-bottom: 0.5rem;
    background: url('${({ imageUrl }) => imageUrl}') no-repeat center center;
    background-size: cover;
`;

function BestToonItem({ webtoon }) {
    return (
        <ToonitemBlock>
            <a href={webtoon.url} target='_blank' rel="noreferrer">
                <Image imageUrl={webtoon.imageUrl} />
                <h4>{webtoon.title}</h4>
                <p>{webtoon.writer}</p>
            </a>
        </ToonitemBlock>
    )
};

export default BestToonItem;