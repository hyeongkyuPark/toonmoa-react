import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import Container from '../../components/Container';
import Search from '../../components/Search';
import useScroll from '../../hooks/useScroll';
import MainNav from '../mainNav/MainNav';

const headerFixed = keyframes`
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0px);
    }
`

const HeaderWrap = styled.header`
    width: 100%;
    border-bottom: 1px solid #eee;
    background: #fff;

    ${({ isFixed }) => isFixed && css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        animation: ${headerFixed} 0.5s;
        z-index: 9999;
    `}
`;

const HeaderBlock = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.5rem 0;
`;

const Title = styled.h1`
    width: 10rem;
    height: 3rem;
    background: url('./images/logo_toonmoa.png') no-repeat center center;
    background-size: contain;
    text-indent: -9999px;
    margin-right: 5rem;
`;

const UserAuth = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 2rem;

    a {
        font-size: 0.8rem;
        font-weight: bold;
    }

    a + a {
        position: relative;
        margin-left: 1rem;
    }
    a + a::before {
        content: '';
        position: absolute;
        left: -0.5rem;
        bottom: 0;
        display: block;
        background: #222;
        width: 1px;
        height: 100%;
    }

    @media ${({ theme }) => theme.tablet} {
        margin-right: 1rem;
    }
`;

const HeaderSearch = styled(Search)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 17rem;
    padding: 0.5rem;
    border: 3px solid #5fa8d7;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;

    input {
        border: none;
        outline: none;
    }
    input[type='text'] {
        flex-grow: 1;
        flex-shrink: 0;
    }
    input[type='submit'] {
        cursor: pointer;
        flex-grow: 0;
        flex-shrink: 0;
        width: 1.5rem;
        height: 100%;
        background: #ccc;
        text-indent: -9999px;
        background: url('./images/icon_search.png') no-repeat center center;
        background-size: contain;
    }

    @media ${({ theme }) => theme.tablet} {
        display: none;
    }
`;

const MenuButton = styled.button`
    display: none;
    width: 2rem;
    height: 2rem;
    outline: none;
    border: none;
    background: url('/images/icon_menu.png') no-repeat center center;
    background-size: contain;

    @media ${({ theme }) => theme.tablet} {
        display: block;
    }
`;

function MainHeader({
    searchInput,
    onSubmitSearch,
    onChangeSearch
}) {

    const [headerElem, setHeaderElem] = useState(null);
    const headerElemRef = useCallback(node => {
        if (node !== null) {
            setHeaderElem(node);
        }
    }, []);

    const isFixed = useScroll(headerElem);

    return (
        <HeaderWrap isFixed={isFixed} ref={headerElemRef}>
            <Container>
                <HeaderBlock>
                    <Link to="/">
                        <Title>
                            툰모아
                        </Title>
                    </Link>
                    <MainNav />
                    <UserAuth>
                        <Link to="login">로그인</Link>
                        <Link to="join">회원가입</Link>
                    </UserAuth>
                    <HeaderSearch
                        placehoder='웹툰 제목 / 작가 / 사이트 검색'
                        submitText='검색'
                        onSubmit={onSubmitSearch}
                        onChange={onChangeSearch}
                        value={searchInput}
                    ></HeaderSearch>
                    <MenuButton />
                </HeaderBlock>
            </Container>
        </HeaderWrap>
    );
}

export default MainHeader;
