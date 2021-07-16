import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Container from '../../components/Container';

const ImageBox = styled.div`

`;

const Image = styled.div`

`;

const ToonmoaAddBlock = styled.section`
    background: #8cbceb;
    color: #fff;
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        em {
            color: #4090dd;
            font-size: 1.7rem;
        }
    }
    p {
        font-size: 0.8rem;
        margin-bottom: 2rem;
    }
`;

function ToonmoaAdd() {
    return (
        <ToonmoaAddBlock>
            <Container>
                <div>
                    <h2><em>툰모아</em>에서 웹툰 효율적으로 관리하기</h2>
                    <p>여러 웹툰 사이트를 한번에 볼 수 있고, 북마크를 이용해 회차 관리까지 한번에</p>
                    <Button buttonType='white'>웹툰 모아보기</Button>
                    <Button>내 서제 바로가기</Button>
                </div>
                <ImageBox>
                    <Image />
                </ImageBox>
            </Container>
        </ToonmoaAddBlock>
    )
}

export default ToonmoaAdd;