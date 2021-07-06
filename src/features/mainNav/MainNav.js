import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavBlock = styled.nav`
    ul {
        display: flex;
        align-items: center;
        height: 100%;
    }
    li + li {
        margin-left: 3.5rem;
    }
    a {
        font-size: 1rem;
        font-weight: bold;
        color: #222;
        text-decoration: none;
    }
    ${props => css`
        a[href="${props.pathname}"] {
            color: #4090dd;
        }
    `}

    @media ${({ theme }) => theme.tablet} {
        display: none;
    }
`;

function MainNav({ location }) {
    return (
        <NavBlock pathname={location.pathname}>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/mystore">내 서재</Link></li>
                <li><Link to="/alltoon">모아보기</Link></li>
                <li><Link to="/notice">공지사항</Link></li>
                <li><Link to="/mypage">마이페이지</Link></li>
            </ul>
        </NavBlock>
    )
};

export default withRouter(MainNav);
