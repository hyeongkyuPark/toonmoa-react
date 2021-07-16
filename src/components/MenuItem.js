import React from 'react';
import styled, { css } from 'styled-components';

const MenuItemBlock = styled.li`
    cursor: pointer;
    width: 6rem;
    padding: 0.5rem 0;
    border-bottom: 0.1rem solid #ccc;
    text-align: center;
    ${({ isActive }) => {
        return isActive && css`
            color: #4090dd;
            border-bottom: 0.1rem solid #4090dd;
        `;
    }}

`;

function MenuItem({ children, isActive, ...rest }) {
    return <MenuItemBlock {...rest} isActive={isActive}>{children}</MenuItemBlock>
};

export default MenuItem;
