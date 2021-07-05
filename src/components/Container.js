import React from 'react';
import styled from 'styled-components';

const ContainerBlock = styled.div`
    max-width: 1280px;
    margin: 0 auto;

    @media ${({ theme }) => theme.tablet} {
        
    }
    @media ${({ theme }) => theme.laptop} {
        width: 100%;
        padding: 0 2rem;
    }
`;

function Container({ children }) {
    return <ContainerBlock>{children}</ContainerBlock>
}

export default Container;
