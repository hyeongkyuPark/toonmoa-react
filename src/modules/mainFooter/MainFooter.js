import React from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';

const TopFooter = styled.div`
    padding: 2rem 0;
    background: #333;
    color: #fff;
`;
const Logo = styled.div`
    width: 12rem;
    height: 5rem;
    background: url('./images/logo_toonmoa_white.png') no-repeat center center;
    background-size: contain;
`;
const TextArea = styled.div`
    width: 100%;
    color: #ccc;
    h2 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 1rem;
    }
`;
const FooterNav = styled.ul`
    margin-left: auto;
    li {
        display: inline-block;
        font-size: 1rem;
        &:not(:last-child) {
            margin-right: 1rem;
        }
    }
`;
const BottomFooter = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem 0;
    background: #222;
`;
const SiteLogo = styled.div`
    width: 5rem;
    height: 5rem;
    background: url('./images/${({ site }) => site}.png') no-repeat center center;
    background-size: contain;
    &:not(:last-child) {
        margin-right: 10rem;
    }
`;

const FlexContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const MainFooterBlock = styled.footer`
    @media ${({ theme }) => theme.mobile} {
        ${Logo} {
            margin-bottom: 1rem;
        }
        ${FlexContainer} {
            align-items: center;
            justify-content: center;
            text-align: center;
        }
        ${FooterNav} {
            width: 100%;
            margin-bottom: 1rem;
        }
        ${BottomFooter} {
            justify-content: space-between;
        }
        ${SiteLogo} {
            margin: 0;
        }
    }
`;

function MainFooter() {
    return (
        <MainFooterBlock>
            <TopFooter>
                <FlexContainer>
                    <Logo></Logo>
                    <FooterNav>
                        <li>???</li>
                        <li>??? ??????</li>
                        <li>????????????</li>
                        <li>????????????</li>
                        <li>???????????????</li>
                    </FooterNav>
                    <TextArea>
                        <h2>????????? (TOONMOA)</h2>
                        <p>?????? ?????????</p>
                        <p>????????? phg0644@gmail.com</p>
                        <p>?????????  https://github.com/hyeongkyuPark</p>
                    </TextArea>
                </FlexContainer>
            </TopFooter>
            <BottomFooter>
                <SiteLogo site="naver" />
                <SiteLogo site="daum" />
                <SiteLogo site="lezhin" />
            </BottomFooter>
        </MainFooterBlock>
    )
}

export default MainFooter;