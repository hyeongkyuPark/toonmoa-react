import React from 'react';
import styled, { css } from 'styled-components';

const ButtonBlock = styled.button`
    cursor: pointer;
    min-width: 10rem;
    padding: 0.7rem 1rem;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: bold;
    ${({ buttonType }) => {
        switch (buttonType) {
            case 'white':
                return css`
                    background: rgba(0, 0, 0, 0);
                    border: 0.2rem solid #fff;
                    color: #fff;
                `;
            default:
                return css`
                    background: #4090dd;
                    color: #fff;
                `;
        }
    }}
    box-sizing: border-box;
`;

function Button({ children, buttonType, ...rest }) {
    return <ButtonBlock buttonType={buttonType} {...rest}>{children}</ButtonBlock>
}

Button.defaultProps = {
    buttonType: 'default',
}

export default Button;