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
                    <h2><em>?????????</em>?????? ?????? ??????????????? ????????????</h2>
                    <p>?????? ?????? ???????????? ????????? ??? ??? ??????, ???????????? ????????? ?????? ???????????? ?????????</p>
                    <Button onClick={() => moveLink('/alltoon')} buttonType='white'>?????? ????????????</Button>
                    <Button onClick={() => moveLink('/mystore')}>??? ?????? ????????????</Button>
                </TextArea>
                <Image />
                <p>
                    @ ????????? ?????? ???????<br />
                    @ ?????? ?????? ?????????????<br />
                    @ ???????????? ??? ??????????
                </p>
            </AddContainer>
        </ToonmoaAddBlock>
    )
}

export default ToonmoaAdd;