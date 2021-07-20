import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Empty from '../../components/Empty';
import MenuItem from '../../components/MenuItem';
import SectionTitle from '../../components/SectionTitle';
import ToonItem from '../../components/ToonItem';

const MenuList = styled.ul`
    display: flex;
    margin-bottom: 2rem;
`;
const ToonList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 3rem;
    @media ${({ theme }) => theme.tablet} {
        grid-template-columns: repeat(3, 1fr);
    }
    @media ${({ theme }) => theme.mobile} {
        grid-template-columns: repeat(2, 1fr);
    }
`;
const CenterButton = styled(Button)`
    width: 20rem;
    margin: 0 auto;
`;

const FullColume = styled.li`
    grid-column: 1/-1;
`;

const CategoryArea = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CategoryButton = styled.button`
    cursor: pointer;
    background: #eee;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    &:first-child {
        border-top-left-radius: 50px;
        border-bottom-left-radius: 50px;
    }
    &:last-child {
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
    ${({ isActive }) => isActive && css`
        background: #4090dd;
        color: #fff;
    `}
`;

const MyToonBlock = styled.div`
    padding: 5rem 0;
    text-align: center;
`;


function MyToon({ onClickMenu, active, category, onClickCategory, myToon, onClickDelete, onClickDetail }) {
    return (
        <MyToonBlock>
            <SectionTitle>웹툰 몰아보기</SectionTitle>
            <Container>
                <CategoryArea onClick={onClickCategory}>
                    <CategoryButton data-title='day' data-initial='mon' isActive={category === 'day'}>요일별</CategoryButton>
                    <CategoryButton data-title='site' data-initial='naver' isActive={category === 'site'}>사이트별</CategoryButton>
                </CategoryArea>
                <MenuList onClick={onClickMenu}>
                    {
                        category === 'day'
                            ? (
                                <>
                                    <MenuItem data-title='mon' isActive={active === 'mon'}>월요일</MenuItem>
                                    <MenuItem data-title='tue' isActive={active === 'tue'}>화요일</MenuItem>
                                    <MenuItem data-title='wed' isActive={active === 'wed'}>수요일</MenuItem>
                                    <MenuItem data-title='thu' isActive={active === 'thu'}>목요일</MenuItem>
                                    <MenuItem data-title='fri' isActive={active === 'fri'}>금요일</MenuItem>
                                    <MenuItem data-title='sat' isActive={active === 'sat'}>토요일</MenuItem>
                                    <MenuItem data-title='sun' isActive={active === 'sun'}>일요일</MenuItem>
                                </>
                            )
                            : category === 'site'
                                ? (
                                    <>
                                        <MenuItem data-title='naver' isActive={active === 'naver'}>네이버</MenuItem>
                                        <MenuItem data-title='daum' isActive={active === 'daum'}>다음</MenuItem>
                                        <MenuItem data-title='lezhin' isActive={active === 'lezhin'}>레진코믹스</MenuItem>
                                    </>
                                )
                                : null
                    }
                </MenuList>
                <ToonList>
                    {
                        myToon.filter(toon => toon[category] === active).length !== 0
                            ? myToon.filter(toon => toon[category] === active)
                                .map((toon) => <ToonItem key={toon.id} toon={toon} onClickDelete={onClickDelete} onClickDetail={onClickDetail} />)
                            : <FullColume><Empty>등록된 웹툰이 없습니다.</Empty></FullColume>

                    }
                </ToonList>
                <CenterButton>웹툰 추가하기</CenterButton>
            </Container>
        </MyToonBlock>
    )
};

export default MyToon;