import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavBlock = styled.nav`
    a {
        color: #222;
        text-decoration: none;
    }
    ${props => css`
        a[href="${props.pathname}"] {
            color: #119011;
        }
    `}
`;

function Nav({ location }) {
    return (
        <NavBlock pathname={location.pathname}>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/mystore">내서재</Link></li>
                <li><Link to="/alltoon">모아보기</Link></li>
                <li><Link to="/notice">공지사항</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
        </NavBlock>
    )
};

export default withRouter(Nav);
