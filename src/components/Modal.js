import React from 'react';
import styled from 'styled-components';

const ModalBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;
`;

function Modal({ children, ...rest }) {
    return <ModalBlock {...rest}>{children}</ModalBlock>
};

export default Modal;