import React from 'react';
import styled from 'styled-components';
import SectionSubTitle from '../../components/SectionSubTitle';
import SectionTitle from '../../components/SectionTitle';
import Container from '../../components/Container';
import MenuItem from '../../components/MenuItem';
import BestToonItem from '../../components/BestToonItem';

const MenuList = styled.ul`
    display: flex;
    margin-bottom: 2rem;
`;

const ToonList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

const RecommendSectionBlock = styled.div`
    padding: 5rem 0;
    h3 {
        margin-bottom: 1rem;
    }
`;

function RecommendSection({ active, onClickMenu, webtoonList }) {
    return (
        <RecommendSectionBlock>
            <SectionTitle>webtoon</SectionTitle>
            <Container>
                <SectionSubTitle>추천웹툰</SectionSubTitle>
                <MenuList onClick={onClickMenu}>
                    <MenuItem data-title='naver' isActive={active === 'naver'}>네이버</MenuItem>
                    <MenuItem data-title='daum' isActive={active === 'daum'}>다음</MenuItem>
                    <MenuItem data-title='lezhin' isActive={active === 'lezhin'}>레진코믹스</MenuItem>
                </MenuList>
                <ToonList>
                    {
                        webtoonList.length === 0 || webtoonList === null
                            ? <div>웹툰 없음</div>
                            : webtoonList.filter((webtoon) => webtoon.site === active)
                                .map((webtoon, idx) => <BestToonItem key={idx} webtoon={webtoon}></BestToonItem>)
                    }
                </ToonList>
            </Container>
        </RecommendSectionBlock>
    )
};

export default RecommendSection;