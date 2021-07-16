import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
    position: relative;
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 4rem;
    &::after {
        content: '';
        position: absolute;
        bottom: -0.7rem;
        width: 5rem;
        height: 0.3rem;
        background: #4090dd;
    }
`;

function SectionTitle({ children }) {
    return <Title>{children}</Title>
}

export default SectionTitle;
