import 영웅 from '@/assets/posters/영웅.jpg'
import 항거 from '@/assets/posters/항거.jpg'
import 봉오동전투 from '@/assets/posters/봉오동전투.jpg'
import 밀정 from '@/assets/posters/밀정.jpg'
import 박열 from '@/assets/posters/박열.jpg'
import 덕혜옹주 from '@/assets/posters/덕혜옹주.jpg'
import 암살 from '@/assets/posters/암살.jpg'
import 마이웨이 from '@/assets/posters/마이웨이.jpg'
import 말모이 from '@/assets/posters/말모이.jpg'
import 동주 from '@/assets/posters/동주.jpg'
import 군함도 from '@/assets/posters/군함도.jpg'
import 보스톤 from '@/assets/posters/보스톤.jpg'
import 태극기휘날리며 from '@/assets/posters/태극기휘날리며.jpg'
import 포화속으로 from '@/assets/posters/포화속으로.jpg'
import 장사리 from '@/assets/posters/장사리.jpg'
import 인천상륙작전 from '@/assets/posters/인천상륙작전.jpg'
import 웰컴투동막골 from '@/assets/posters/웰컴투동막골.jpg'
import 고지전 from '@/assets/posters/고지전.jpg'
import 효자동이발사 from '@/assets/posters/효자동이발사.jpg'
import 국제시장 from '@/assets/posters/국제시장.jpg'
import 실미도 from '@/assets/posters/실미도.jpg'
import 킹메이커 from '@/assets/posters/킹메이커.jpg'
import 하이재킹 from '@/assets/posters/하이재킹.jpg'
import 님은먼곳에 from '@/assets/posters/님은먼곳에.jpg'
import 알포인트 from '@/assets/posters/알포인트.jpg'
import 남산의부장들 from '@/assets/posters/남산의부장들.jpg'
import 그때그사람들 from '@/assets/posters/그때그사람들.jpg'
import 행복의나라 from '@/assets/posters/행복의나라.jpg'
import 서울의봄 from '@/assets/posters/서울의봄.jpg'
import 화려한휴가 from '@/assets/posters/화려한휴가.jpg'
import 택시운전사 from '@/assets/posters/택시운전사.jpg'
import 박하사탕 from '@/assets/posters/박하사탕.jpg'
import 변호인 from '@/assets/posters/변호인.jpg'
import 헌트 from '@/assets/posters/헌트.jpg'
import 남영동 from '@/assets/posters/남영동.png'
import 비공식작전 from '@/assets/posters/비공식작전.jpg'
import 살인의추억 from '@/assets/posters/살인의추억.jpg'
import 일구팔칠 from '@/assets/posters/1987.jpg'
import 범죄와의전쟁 from '@/assets/posters/범죄와의전쟁.jpg'
import 모가디슈 from '@/assets/posters/모가디슈.jpg'
import 삼진그룹 from '@/assets/posters/삼진그룹.jpg'
import 벌새 from '@/assets/posters/벌새.jpg'
import 국가부도의날 from '@/assets/posters/국가부도의날.jpg'
import 공작 from '@/assets/posters/공작.jpg'
import 연평해전 from '@/assets/posters/연평해전.jpg'
import 추격자 from '@/assets/posters/추격자.jpg'
import 더킹 from '@/assets/posters/더킹.jpg'
import 아이캔스피크 from '@/assets/posters/아이캔스피크.jpg'
import 댓글부대 from '@/assets/posters/댓글부대.jpg'
import 내부자들 from '@/assets/posters/내부자들.jpg'

export default [
    { id: 1, title: '영웅', eventYear: 1909, event: '안중근 의거', summary: '한 발의 총성으로, \n역사가 흔들렸다', imageUrl: 영웅, details: {} },
    { id: 2, title: '항거', eventYear: 1919, event: '3·1운동', summary: '형무소 안에 울려 퍼진 \n개구리 소리?', imageUrl: 항거, details: {} },
    { id: 3, title: '봉오동 전투', eventYear: 1920, event: '봉오동전투', summary: '산이 무기였다, \n적은 길을 잃었다', imageUrl: 봉오동전투, details: {} },
    { id: 4, title: '밀정', eventYear: 1923, event: '황옥 경부 폭탄사건', summary: '이중 스파이일까, 아니면 \n진정한 애국자일까?', imageUrl: 밀정, details: {} },
    { id: 5, title: '박열', event: '박열 재판', summary: '조선의 미친놈, \n일본 법정을 뒤집다', imageUrl: 박열, details: {} },
    { id: 6, title: '덕혜옹주', eventYear: 1931, event: '만주사변', summary: '공주에서 포로로, \n그리고 이방인으로', imageUrl: 덕혜옹주, details: {} },
    { id: 7, title: '암살', eventYear: 1932, event: '우가키 조선총독 \n암살 작전', summary: '목표는 하나, \n조국을 위한 암살', imageUrl: 암살, details: {} },
    { id: 8, title: '마이웨이', eventYear: 1937, event: '중일전쟁', summary: '도쿄에서 경성, \n그리고 노르망디까지', imageUrl: 마이웨이, details: {} },
    { id: 9, title: '말모이', eventYear: 1942, event: '조선어학회 사건', summary: '한 장의 종이에 \n희망을 새기다', imageUrl: 말모이, details: {} },
    {
            id: 10,
            title: '동주',
            eventYear: 1944,
            event: '윤동주 형무소 수감',
            summary: '짧았던 청춘, 영원한 시',
            imageUrl: 동주,
            // 추가되는 상세 정보들
            details: {
                // 인용구 정보
                quote: {
                    text: "하늘을 우러러 한 점 부끄럼 없기를…",
                    author: "윤동주",
                    actor: "강하늘",
                    source: "동주"
                },
                // 시놉시스 (문단별로 배열로 저장)
                synopsis: [
                    "이름도, 언어도, 꿈도, 모든 것이 허락되지 않았던 일제강점기. 한 집에서 태어나고 자란 동갑내기 사촌지간 동주와 몽규. 시인을 꿈꾸는 청년 동주에게 신념을 위해 거침없이 행동하는 청년 몽규는 가장 가까운 벗이면서도, 넘기 힘든 산처럼 느껴진다.",
                    "창씨개명을 강요하는 혼란스러운 나라를 떠나 일본 유학 길에 오른 두 사람. 일본으로 건너간 뒤 몽규는 더욱 독립 운동에 매진하게 되고, 절망적인 순간에도 시를 쓰며 시대의 비극을 아파하던 동주와의 갈등은 점점 깊어진다. 어둠의 시대, 평생을 함께 한 친구이자 영원한 라이벌이었던 윤동주와 송몽규의 끝나지 않은 이야기가 지금 시작된다."
                ],
                // 사건 정보
                eventDetails: {
                    period: "1910년 ~ 1945년 (윤동주 사망 1945.2.16.)",
                    keywords: ["일제강점기", "저항시인", "윤동주", "송몽규", "문학", "독립운동"],
                    timeline: [
                        {
                            date: "1945년 2월 16일",
                            event: "윤동주, 후쿠오카 형무소에서 사망"
                        },
                        {
                            date: "1943년 7월",
                            event: "윤동주, 일본에서 체포"
                        },
                        {
                            date: "1945년 8월 15일",
                            event: "광복"
                        }
                    ]
                },
                // 시대상 설명
                historicalContext: "1930-1940년대의 한국은 일제의 압박 속에서 독립운동이 점차 조직화되던 시기였다. 많은 청년들이 교육을 위해 일본으로 유학을 떠났지만, 그곳에서도 차별과 억압을 겪었다. 윤동주와 송몽규 같은 인물들은 문학과 지식으로 저항하고자 했고, 그들의 활동은 일본의 감시와 탄압을 피해 나아갔다. 이 시기는 한국 문학사에서 중요한 전환점이 되었으며, 많은 저항 문인들이 탄생한 시기이기도 하다.",
                // 관련 영상
                relatedVideos: [
                    {
                        title: "관련 영상 1",
                        youtubeId: "W1QIciSrI2o",
                        params: "si=YooTJcs85-31MI14"
                    },
                    {
                        title: "관련 영상 2",
                        youtubeId: "QkiK1oEDrho",
                        params: "si=-Koc20T8SKf1ZzGi"
                    }
                ],
                // 배경음악 정보
                backgroundMusic: {
                    youtubeId: "LcR0Uyku1LQ"
                }
            }
        },
    { id: 11, title: '군함도', eventYear: 1945, event: '일본의 패망과 광복', summary: '일본이 숨긴 섬, \n조선이 잊을 수 없는 섬', imageUrl: 군함도, details: {} },
    { id: 12, title: '보스톤', eventYear: 1947, event: '보스턴 마라톤 우승', summary: '태극기로 완주하다', imageUrl: 보스톤, details: {} },
    { id: 13, title: '태극기 휘날리며', eventYear: 1950, event: '6·25전쟁', summary: '돌아온다고 \n약속했잖아요', imageUrl: 태극기휘날리며, details: {} },
    { id: 14, title: '포화 속으로', event: '포항 전투', summary: '포화 소리에 묻힌 \n그들의 청춘', imageUrl: 포화속으로, details: {} },
    { id: 15, title: '장사리', event: '장사상륙작전', summary: '역사의 각주로 남은 \n그들의 청춘', imageUrl: 장사리, details: {} },
    { id: 16, title: '인천상륙작전', event: '인천상륙작전', summary: '기적? 그건 작전이었다', imageUrl: 인천상륙작전, details: {} },
    { id: 17, title: '웰컴 투 동막골', event: '중공군 개입', summary: '총 대신 막걸리, \n수류탄 대신 감자', imageUrl: 웰컴투동막골, details: {} },
    { id: 18, title: '고지전', eventYear: 1953, event: '휴전 협정', summary: '산은 기억한다, \n헛되이 흘린 젊은 피를', imageUrl: 고지전, details: {} },
    { id: 19, title: '효자동 이발사', eventYear: 1960, event: '4·19혁명', summary: '‘대머리 그 남자’의 \n은밀한 헤어컷', imageUrl: 효자동이발사, details: {} },
    { id: 20, title: '국제시장', eventYear: 1963, event: '서독 광부 파견', summary: 'K-아버지 주름살', imageUrl: 국제시장, details: {} },
    { id: 21, title: '실미도', eventYear: 1968, event: '1·21사태', summary: '국가가 버린 \n31명의 살인 병기', imageUrl: 실미도, details: {} },
    { id: 22, title: '하이재킹', eventYear: 1971, event: '대한한공 F27기 \n납북미수사건', summary: '88년 서울행 비행기, \n목적지는 평양!?', imageUrl: 하이재킹, details: {} },
    { id: 23, title: '킹메이커', event: '제7대 대통령 선거', summary: '정치판 서커스, \n진짜 설계자는 따로 있다', imageUrl: 킹메이커, details: {} },
    { id: 24, title: '님은 먼곳에', event: '베트남 전쟁', summary: '전쟁터에서도 멈추지 않은 \n그리움의 멜로디', imageUrl: 님은먼곳에, details: {} },
    { id: 25, title: '알포인트', event: '베트남 전쟁', summary: '사건일지: 실종자 다수, \n원인 불명, 생존자 0명', imageUrl: 알포인트, details: {} },
    { id: 26, title: '남산의 부장들', eventYear: 1979, event: '10·26사태', summary: '당신의 저녁 식사가 정치적 \n음모의 무대가 된다면?', imageUrl: 남산의부장들, details: {} },
    { id: 27, title: '그때 그 사람들', event: '10·26사태', summary: '남산에 계신 부장님들보다는 \n훨씬 유머러스하네요', imageUrl: 그때그사람들, details: {} },
    { id: 28, title: '서울의 봄', event: '12·12사태', summary: '누구도 예상 못한 생일잔치', imageUrl: 서울의봄, details: {} },
    { id: 29, title: '행복의 나라', event: '12·12사태', summary: '5공 유니버스의 마무리', imageUrl: 행복의나라, details: {} },
    { id: 30, title: '화려한 휴가', eventYear: 1980, event: '5·18민주화운동', summary: '전혀 화려하지 않았던 휴가', imageUrl: 화려한휴가, details: {} },
    { id: 31, title: '택시운전사', event: '5·18민주화운동', summary: '노 광주, 노 민주(주의)', imageUrl: 택시운전사, details: {} },
    { id: 32, title: '박하사탕', event: '5·18민주화운동', summary: '한 남자의 되돌릴 수 없는 과거', imageUrl: 박하사탕, details: {} },
    { id: 33, title: '변호인', eventYear: 1981, event: '부림 사건', summary: '‘돼지국밥’처럼 뜨거운 \n변호인의 인권 투쟁', imageUrl: 변호인, details: {} },
    { id: 34, title: '헌트', eventYear: 1983, event: '아웅 산 묘소 \n폭탄 테러 사건', summary: '코리아 서스펜스: \n적인가, 동료인가?', imageUrl: 헌트, details: {} },
    { id: 35, title: '남영동', eventYear: 1985, event: '서울대 민추위 사건', summary: '삭제된 509호 고문실의 기록', imageUrl: 남영동, details: {} },
    { id: 36, title: '비공식작전', eventYear: 1986, event: '레바논 한국 외교관 \n납치 사건', summary: '상부에선 ‘공식적으로 \n이 작전이 없었다’고 한다', imageUrl: 비공식작전, details: {} },
    { id: 37, title: '살인의 추억', event: '화성연쇄살인사건', summary: '밥 잘 먹고 다닙시다', imageUrl: 살인의추억, details: {} },
    { id: 38, title: '1987', eventYear: 1987, event: '6월민주항쟁', summary: '역사를 바꾼 그해의 외침', imageUrl: 일구팔칠, details: {} },
    { id: 39, title: '범죄와의 전쟁', eventYear: 1990, event: '10·13 특별선언', summary: '‘느그 서장’이랑 \n친하면 다 되는 세상', imageUrl: 범죄와의전쟁, details: {} },
    { id: 40, title: '모가디슈', eventYear: 1991, event: '소말리아\n외교공관 철수', summary: '두 개의 국가, 하나의 탈출구', imageUrl: 모가디슈, details: {} },
    { id: 41, title: '삼진그룹', event: '낙동강\n페놀 유출사건', summary: '토익 점수보다 높아진 \n세 친구의 정의 지수', imageUrl: 삼진그룹, details: {} },
    { id: 42, title: '벌새', eventYear: 1994, event: '성수대교 붕괴', summary: '열네 살 마음에도 금이 갔다,\n마치 그 시절처럼', imageUrl: 벌새, details: {} },
    { id: 43, title: '국가부도의 날', eventYear: 1997, event: 'IMF 외환위기', summary: '그날 우리 아버지가 \n해고 당한 이유', imageUrl: 국가부도의날, details: {} },
    { id: 44, title: '공작', event: '제15대 대통령 선거', summary: '서로를 믿고 싶었던 \n두 남자의 ‘비즈니스’', imageUrl: 공작, details: {} },
    { id: 45, title: '연평해전', eventYear: 2002, event: '제2연평해전', summary: '모두가 붉게 물든 2002년, \n진짜 영웅은 따로 있었다', imageUrl: 연평해전, details: {} },
    { id: 46, title: '추격자', eventYear: 2003, event: '유영철 연쇄살인 사건', summary: '혹시 망치나 \n몽둥이 같은 거 있어요?', imageUrl: 추격자, details: {} },
    { id: 47, title: '더킹', eventYear: 2004, event: '노무현 탄핵 소추', summary: '대한민국 현대 정치사 입문서', imageUrl: 더킹, details: {} },
    { id: 48, title: '아이캔스피크', eventYear: 2007, event: '미국 의회 \n위안부 결의안', summary: '할머니의 사연 있는 ‘ABCD’', imageUrl: 아이캔스피크, details: {} },
    { id: 49, title: '댓글부대', eventYear: 2012, event: '국정원·국방부 \n여론조작 의혹', summary: '클릭 한 번으로 \n세상을 조작할 수 있다면', imageUrl: 댓글부대, details: {} },
    { id: 50, title: '내부자들', eventYear: 2016, event: '고위 공무원 \n국민 개·돼지 발언', summary: '정의라는 달달한 것이 \n아직 남아있긴 한가', imageUrl: 내부자들, details: {} },
]