import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.div`
    display: inline-block;
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-bottom: 0.5rem;
`;

const Image = styled.div`
    width: 100%;
    height: 100%;
    background: url('./images/icon_${props => props.imageSource}.png') no-repeat center center;
    background-size: contain;
`;

const InfoBlock = styled.li`
    width: 15rem;
    padding: 1.5rem 0;
    text-align: center;
    h3 {
        text-transform: uppercase;
        margin-bottom: 0.3rem;
    }
    p {
        font-size: 1.5rem;
        font-weight: bold;
    }

    @media ${({ theme }) => theme.mobile} {
        width: 13rem;
        padding: 4rem 0;
        ${ImageBox} {
            width: 5rem;
            height: 5rem;
            padding: 1.3rem;
            margin-bottom: 1rem;
        }
        h3 {
            font-size: 1.2rem;
            margin-bottom: 0.4rem;
        }
        p {
            font-size: 1.8rem;
        }
    }
`;

function InfoItem({ imageSource, title, count }) {
    return (
        <InfoBlock>
            <ImageBox>
                <Image imageSource={imageSource} />
            </ImageBox>
            <h3>{title}</h3>
            <p>{count}</p>
        </InfoBlock>
    )
};

export default InfoItem;