const recommendToon = [
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=772243',
        imageUrl: './images/01.png',
        title: '모스크바의 여명',
        writer: '황장미 / 이산오',
        site: 'naver'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=557676',
        imageUrl: './images/02.png',
        title: '다이스(DICE)',
        writer: '윤현석',
        site: 'naver'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=773067',
        imageUrl: './images/03.png',
        title: '제타',
        writer: '하지',
        site: 'naver'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=765156',
        imageUrl: './images/04.png',
        title: '빌런투킬',
        writer: '퓨핀 / 은지',
        site: 'naver'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        site: 'naver'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        site: 'naver'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=773067',
        imageUrl: './images/03.png',
        title: '제타',
        writer: '하지',
        site: 'daum'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=765156',
        imageUrl: './images/04.png',
        title: '빌런투킬',
        writer: '퓨핀 / 은지',
        site: 'daum'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=772243',
        imageUrl: './images/01.png',
        title: '모스크바의 여명',
        writer: '황장미 / 이산오',
        site: 'daum'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=557676',
        imageUrl: './images/02.png',
        title: '다이스(DICE)',
        writer: '윤현석',
        site: 'daum'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        site: 'daum'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        site: 'daum'
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=765156',
        imageUrl: './images/04.png',
        title: '빌런투킬',
        writer: '퓨핀 / 은지',
        site: 'lezhin',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        site: 'lezhin',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=772243',
        imageUrl: './images/01.png',
        title: '모스크바의 여명',
        writer: '황장미 / 이산오',
        site: 'lezhin',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=557676',
        imageUrl: './images/02.png',
        title: '다이스(DICE)',
        writer: '윤현석',
        site: 'lezhin',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=773067',
        imageUrl: './images/03.png',
        title: '제타',
        writer: '하지',
        site: 'lezhin',
    },
    {
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        site: 'lezhin',
    },
];

const myToon = [
    {
        id: 1,
        url: 'https://comic.naver.com/webtoon/list?titleId=772243',
        imageUrl: './images/01.png',
        title: '모스크바의 여명',
        writer: '황장미 / 이산오',
        description: `21세의 피아니스트 이시윤.
        사고로 인해 피아노를 더 이상 칠 수 없게 된 삶을 비관하다 죽음을 택했지만,
        알아들을 수 없는 외국어로 얘기하는 갑부 집안에서
        소녀 "타티아나"로 눈을 뜬다.
        신이 주신 기회인 걸까? 아니면 저주인 걸까?
        성별이 바뀐 게 뭐 대수냐! 손만 멀쩡하다면 다시 피아노를 칠 수 있어!
        어차피 이렇게 된 거 "타티아나"로서 못다 한 꿈을 이뤄보자!`,
        bookmark: '36',
        day: 'mon',
        site: 'naver',
    },
    {
        id: 2,
        url: 'https://comic.naver.com/webtoon/list?titleId=557676',
        imageUrl: './images/02.png',
        title: '다이스(DICE)',
        writer: '윤현석',
        description: `빵셔틀 남학생 동태가 우연히 얻게 된 주사위 '다이스'. 이 주사위만 굴리면 얼굴, 신체, 능력치 등 모든 걸 바꿀 수 있다고? '최후의 다이스'를 손에 얻기 위한 판타지 게임이 시작된다!`,
        bookmark: '3',
        day: 'mon',
        site: 'naver',
    },
    {
        id: 3,
        url: 'https://comic.naver.com/webtoon/list?titleId=773067',
        imageUrl: './images/03.png',
        title: '제타',
        writer: '하지',
        description: `극심한 슬럼프에 안드로이드 '제타'의 그림을 표절해버린 금세기 최고의 천재 화가 '최후람'.
        그 사실을 숨기려는 최후람과 파헤치려는 제타의 피튀기는 4주 간의 미술제가 시작된다!
        인간 이하의 인간과 인간 이상의 안드로이드가 보여주는 아이러니. 과연 최후의 승자는 누가 될 것인가?`,
        bookmark: '26',
        day: 'mon',
        site: 'naver',
    },
    {
        id: 4,
        url: 'https://comic.naver.com/webtoon/list?titleId=765156',
        imageUrl: './images/04.png',
        title: '빌런투킬',
        writer: '퓨핀 / 은지',
        description: `동료를 살해했다는 억울한 누명을 쓰고 사망한 카시안. 모든 게 끝이라고 생각한 순간. 그의 영혼은 어느 소년의 몸에 빙의되어 빌런으로 각성한다.
        선망의 대상이자 대중의 지지를 받던 탑클래스 싸이커였던 그가 하루아침에 빌런이 되다니! 그는 자신의 운명을 받아들이기 힘들다.
        복수와 분노! 거듭되는 파괴적인 충동으로 이성까지 잠식당할 위기에 처하지만, 신비로운 존재 모로스의 도움과 초인적인 자제력으로 이를 극복해 낸다.
        “대재앙급이라고?! 어디.. 화끈하게 터트려 볼까!!”`,
        bookmark: '15',
        day: 'mon',
        site: 'naver',
    },
    {
        id: 5,
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        description: `인생 재건설 서바이벌
        2015 대학만화 최강자전 수상작!`,
        bookmark: '20',
        day: 'mon',
        site: 'naver',
    },
    {
        id: 6,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'mon',
        site: 'naver',
    },
    {
        id: 7,
        url: 'https://comic.naver.com/webtoon/list?titleId=772243',
        imageUrl: './images/01.png',
        title: '모스크바의 여명',
        writer: '황장미 / 이산오',
        description: `21세의 피아니스트 이시윤.
        사고로 인해 피아노를 더 이상 칠 수 없게 된 삶을 비관하다 죽음을 택했지만,
        알아들을 수 없는 외국어로 얘기하는 갑부 집안에서
        소녀 "타티아나"로 눈을 뜬다.
        신이 주신 기회인 걸까? 아니면 저주인 걸까?
        성별이 바뀐 게 뭐 대수냐! 손만 멀쩡하다면 다시 피아노를 칠 수 있어!
        어차피 이렇게 된 거 "타티아나"로서 못다 한 꿈을 이뤄보자!`,
        bookmark: '36',
        day: 'mon',
        site: 'naver',
    },
    {
        id: 8,
        url: 'https://comic.naver.com/webtoon/list?titleId=557676',
        imageUrl: './images/02.png',
        title: '다이스(DICE)',
        writer: '윤현석',
        description: `빵셔틀 남학생 동태가 우연히 얻게 된 주사위 '다이스'. 이 주사위만 굴리면 얼굴, 신체, 능력치 등 모든 걸 바꿀 수 있다고? '최후의 다이스'를 손에 얻기 위한 판타지 게임이 시작된다!`,
        bookmark: '3',
        day: 'mon',
        site: 'naver',
    },
    {
        id: 9,
        url: 'https://comic.naver.com/webtoon/list?titleId=773067',
        imageUrl: './images/03.png',
        title: '제타',
        writer: '하지',
        description: `극심한 슬럼프에 안드로이드 '제타'의 그림을 표절해버린 금세기 최고의 천재 화가 '최후람'.
        그 사실을 숨기려는 최후람과 파헤치려는 제타의 피튀기는 4주 간의 미술제가 시작된다!
        인간 이하의 인간과 인간 이상의 안드로이드가 보여주는 아이러니. 과연 최후의 승자는 누가 될 것인가?`,
        bookmark: '26',
        day: 'tue',
        site: 'daum'
    },
    {
        id: 10,
        url: 'https://comic.naver.com/webtoon/list?titleId=765156',
        imageUrl: './images/04.png',
        title: '빌런투킬',
        writer: '퓨핀 / 은지',
        description: `동료를 살해했다는 억울한 누명을 쓰고 사망한 카시안. 모든 게 끝이라고 생각한 순간. 그의 영혼은 어느 소년의 몸에 빙의되어 빌런으로 각성한다.
        선망의 대상이자 대중의 지지를 받던 탑클래스 싸이커였던 그가 하루아침에 빌런이 되다니! 그는 자신의 운명을 받아들이기 힘들다.
        복수와 분노! 거듭되는 파괴적인 충동으로 이성까지 잠식당할 위기에 처하지만, 신비로운 존재 모로스의 도움과 초인적인 자제력으로 이를 극복해 낸다.
        “대재앙급이라고?! 어디.. 화끈하게 터트려 볼까!!`,
        bookmark: '15',
        day: 'tue',
        site: 'daum'
    },
    {
        id: 11,
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        description: `인생 재건설 서바이벌
        2015 대학만화 최강자전 수상작!`,
        bookmark: '20',
        day: 'tue',
        site: 'daum'
    },
    {
        id: 12,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'tue',
        site: 'daum'
    },
    {
        id: 13,
        url: 'https://comic.naver.com/webtoon/list?titleId=772243',
        imageUrl: './images/01.png',
        title: '모스크바의 여명',
        writer: '황장미 / 이산오',
        description: `21세의 피아니스트 이시윤.
        사고로 인해 피아노를 더 이상 칠 수 없게 된 삶을 비관하다 죽음을 택했지만,
        알아들을 수 없는 외국어로 얘기하는 갑부 집안에서
        소녀 "타티아나"로 눈을 뜬다.
        신이 주신 기회인 걸까? 아니면 저주인 걸까?
        성별이 바뀐 게 뭐 대수냐! 손만 멀쩡하다면 다시 피아노를 칠 수 있어!
        어차피 이렇게 된 거 "타티아나"로서 못다 한 꿈을 이뤄보자!`,
        bookmark: '36',
        day: 'tue',
        site: 'daum'
    },
    {
        id: 14,
        url: 'https://comic.naver.com/webtoon/list?titleId=557676',
        imageUrl: './images/02.png',
        title: '다이스(DICE)',
        writer: '윤현석',
        description: `빵셔틀 남학생 동태가 우연히 얻게 된 주사위 '다이스'. 이 주사위만 굴리면 얼굴, 신체, 능력치 등 모든 걸 바꿀 수 있다고? '최후의 다이스'를 손에 얻기 위한 판타지 게임이 시작된다!`,
        bookmark: '3',
        day: 'tue',
        site: 'daum'
    },
    {
        id: 15,
        url: 'https://comic.naver.com/webtoon/list?titleId=773067',
        imageUrl: './images/03.png',
        title: '제타',
        writer: '하지',
        description: `극심한 슬럼프에 안드로이드 '제타'의 그림을 표절해버린 금세기 최고의 천재 화가 '최후람'.
        그 사실을 숨기려는 최후람과 파헤치려는 제타의 피튀기는 4주 간의 미술제가 시작된다!
        인간 이하의 인간과 인간 이상의 안드로이드가 보여주는 아이러니. 과연 최후의 승자는 누가 될 것인가?`,
        bookmark: '26',
        day: 'tue',
        site: 'daum'
    },
    {
        id: 16,
        url: 'https://comic.naver.com/webtoon/list?titleId=765156',
        imageUrl: './images/04.png',
        title: '빌런투킬',
        writer: '퓨핀 / 은지',
        description: `동료를 살해했다는 억울한 누명을 쓰고 사망한 카시안. 모든 게 끝이라고 생각한 순간. 그의 영혼은 어느 소년의 몸에 빙의되어 빌런으로 각성한다.
        선망의 대상이자 대중의 지지를 받던 탑클래스 싸이커였던 그가 하루아침에 빌런이 되다니! 그는 자신의 운명을 받아들이기 힘들다.
        복수와 분노! 거듭되는 파괴적인 충동으로 이성까지 잠식당할 위기에 처하지만, 신비로운 존재 모로스의 도움과 초인적인 자제력으로 이를 극복해 낸다.
        “대재앙급이라고?! 어디.. 화끈하게 터트려 볼까!!`,
        bookmark: '15',
        day: 'tue',
        site: 'daum'
    },
    {
        id: 17,
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        description: `인생 재건설 서바이벌
        2015 대학만화 최강자전 수상작!`,
        bookmark: '20',
        day: 'wed',
        site: 'daum'
    },
    {
        id: 18,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'wed',
        site: 'daum'
    },
    {
        id: 19,
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        description: `인생 재건설 서바이벌
        2015 대학만화 최강자전 수상작!`,
        bookmark: '20',
        day: 'wed',
        site: 'daum'
    },
    {
        id: 20,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'wed',
        site: 'daum'
    },
    {
        id: 21,
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        description: `인생 재건설 서바이벌
        2015 대학만화 최강자전 수상작!`,
        bookmark: '20',
        day: 'thu',
        site: 'naver'
    },
    {
        id: 22,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'thu',
        site: 'naver'
    },
    {
        id: 23,
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        description: `인생 재건설 서바이벌
        2015 대학만화 최강자전 수상작!`,
        bookmark: '20',
        day: 'thu',
        site: 'naver'
    },
    {
        id: 24,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'thu',
        site: 'naver'
    },
    {
        id: 25,
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        description: `인생 재건설 서바이벌
        2015 대학만화 최강자전 수상작!`,
        bookmark: '20',
        day: 'fri',
        site: 'naver'
    },
    {
        id: 26,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'fri',
        site: 'naver'
    },
    {
        id: 27,
        url: 'https://comic.naver.com/webtoon/list?titleId=676695',
        imageUrl: './images/05.png',
        title: '제로게임',
        writer: '즐바센',
        description: `인생 재건설 서바이벌
        2015 대학만화 최강자전 수상작!`,
        bookmark: '20',
        day: 'sat',
        site: 'naver'
    },
    {
        id: 28,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'sat',
        site: 'naver'
    },
    {
        id: 29,
        url: 'https://comic.naver.com/webtoon/list?titleId=703846',
        imageUrl: './images/06.png',
        title: '여신강림',
        writer: '야옹이',
        description: `네웹 대표 글로벌 인기작! 주경, 수호, 서준. 세 청춘의 두근두근 눈호강 로맨스~♡
        메이크업으로 여신이 된 주경이는 꿈과 사랑을 이룰 수 있을까?`,
        bookmark: '18',
        day: 'sat',
        site: 'daum'
    },
];

export function getRecommendToon() {
    return recommendToon;
}

export function getMyToon() {
    return myToon;
}

export function removeMyToonById(id) {
    // 삭제 로직
    console.log('삭제', id);

    return id;
}

export async function detailMyToonById(id) {
    const random = Math.floor(Math.random() * 100);
    const result = [];

    for (let i = 0; i < random; i++) {
        result.push(i);
    }

    return result;
}