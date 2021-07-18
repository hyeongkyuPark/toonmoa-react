import React from 'react';
import styled from 'styled-components';
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

const MyToonBlock = styled.div`
    padding: 5rem 0;
    text-align: center;
`;

const FullColume = styled.li`
    grid-column: 1/-1;
`;

function MyToon({ onClickMenu, active, category, myToon }) {
    return (
        <MyToonBlock>
            <SectionTitle>웹툰 몰아보기</SectionTitle>
            <Container>
                <MenuList onClick={onClickMenu}>
                    <MenuItem data-title='mon' isActive={active === 'mon'}>월요일</MenuItem>
                    <MenuItem data-title='tue' isActive={active === 'tue'}>화요일</MenuItem>
                    <MenuItem data-title='wed' isActive={active === 'wed'}>수요일</MenuItem>
                    <MenuItem data-title='thu' isActive={active === 'thu'}>목요일</MenuItem>
                    <MenuItem data-title='fri' isActive={active === 'fri'}>금요일</MenuItem>
                    <MenuItem data-title='sat' isActive={active === 'sat'}>토요일</MenuItem>
                    <MenuItem data-title='sun' isActive={active === 'sun'}>일요일</MenuItem>
                </MenuList>
                <ToonList>
                    {
                        myToon.filter(toon => toon[category] === active).length !== 0
                            ? myToon.filter(toon => toon[category] === active)
                                .map(toon => <ToonItem toon={toon} />)
                            : <FullColume><Empty>등록된 웹툰이 없습니다.</Empty></FullColume>

                    }
                </ToonList>
                <CenterButton>웹툰 추가하기</CenterButton>
            </Container>
        </MyToonBlock>
    )
};

export default MyToon;