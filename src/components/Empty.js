import React from 'react';
import styled from 'styled-components';

const EmptyBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    font-size: 1.5rem;
`;

function Empty({ children }) {
    return <EmptyBlock>{children}</EmptyBlock>
};

export default Empty;