import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    font-size: 1.2rem;
    color: #4090dd;
    span {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        background: url('./images/icon_arrow_blue.png') no-repeat center center;
        background-size: contain;
        transform: rotate(180deg);
    }
`;

function SectionSubTitle({ children }) {
    return <Title>{children}<span></span></Title>
};

export default SectionSubTitle;