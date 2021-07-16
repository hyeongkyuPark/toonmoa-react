import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';

const TextArea = styled.div`
    width: 50%;
    padding: 5rem 0;
    h2 {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 1rem;
        em {
            color: #4090dd;
            font-size: 2rem;
        }
    }
    p {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
`;

const Image = styled.div`
    align-self: stretch;
    width: 30%;
    background: url('./images/band-banner01.png') no-repeat center center;
    background-size: contain;
    margin-left: auto;
`;

const AddContainer = styled(Container)`
    position: relative;
    display: flex;
    align-items: flex-end;
    & > p {
        font-size: 1rem;
        padding-bottom: 1rem;
    }
`;

const ToonmoaAddBlock = styled.section`
    background: #8cbceb;
    color: #fff;

    @media ${({ theme }) => theme.tablet} {
        ${AddContainer} {
            flex-direction: column;
            align-items: flex-start;
            & > p {
                z-index: 1;
            }
            & > p br {
                display: none;
            }
        }
        ${TextArea} {
            position: relative;
            width: 100%;
            z-index: 1;
        }
        ${Image} {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 25rem;
            height: 100%;
        }
    }

    @media ${({ theme }) => theme.mobile} {
        text-align: center;
        ${Image} {
            display: none;
        }
        ${TextArea} {
            h2 {
                font-size: 1.6rem;
                em {
                    font-size: 1.8rem
                }
            }
            p {
                font-size: 0.9rem;
                word-break: keep-all;
            }
        }
    }
`;

function ToonmoaAdd({ moveLink }) {
    return (
        <ToonmoaAddBlock>
            <AddContainer>
                <TextArea>
                    <h2><em>툰모아</em>에서 웹툰 효율적으로 관리하기</h2>
                    <p>여러 웹툰 사이트를 한번에 볼 수 있고, 북마크를 이용해 회차 관리까지 한번에</p>
                    <Button onClick={() => moveLink('/alltoon')} buttonType='white'>웹툰 모아보기</Button>
                    <Button onClick={() => moveLink('/mystore')}>내 서제 바로가기</Button>
                </TextArea>
                <Image />
                <p>
                    @ 보는게 너무 많아?<br />
                    @ 내가 이걸 읽었던가?<br />
                    @ 어디부터 볼 차례지?
                </p>
            </AddContainer>
        </ToonmoaAddBlock>
    )
}

export default ToonmoaAdd;