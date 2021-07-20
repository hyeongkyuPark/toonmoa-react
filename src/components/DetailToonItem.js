import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
    width: 6rem;
    height: 4rem;
    background: #555;
    margin-right: 5rem;
`;

const DetailToonItemBlcok = styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    h3 {
        font-size: 1.3rem;
        margin-right: auto;
    }
    p {
        font-size: 0.8rem;
    }

    &:not(:last-child) {
        border-bottom: 1px solid #aaa;
    }
`;


function DetailToonItem({ toon, ...rest }) {
    return (
        <DetailToonItemBlcok {...rest}>
            <Image />
            <h3>{toon}화. 어쩌구저쩌구</h3>
            <p>2021-07-19</p>
        </DetailToonItemBlcok>
    )
};

export default DetailToonItem;