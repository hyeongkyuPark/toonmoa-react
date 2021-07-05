import React, { useState } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';
import Search from '../../components/Search';

const HeaderBlock = styled.div`
    display: flex;
    width: 100%;
    padding: 1rem 0;
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
        background: url('/images/icon_search.png') no-repeat center center;
        background-size: contain;
    }
`;

function Header() {
    const [searchInput, setSearchInput] = useState('');

    const onSubmitSearch = (e) => {
        e.preventDefault();
        console.log('submit~!');
    };
    const onChangeSearch = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <header>
            <Container>
                <HeaderBlock>
                    <HeaderSearch
                        placehoder='웹툰 제목 / 작가 / 사이트 검색'
                        submitText='검색'
                        onSubmit={onSubmitSearch}
                        onChange={onChangeSearch}
                        value={searchInput}
                    ></HeaderSearch>
                </HeaderBlock>
            </Container>
        </header>
    );
}

export default Header;
