<template>
    <div class="dark-container">
      
      <!-- Welcome Section -->
      <div class="welcome-section">
        <h1 class="welcome-title">Original</h1>
        <h2 class="welcome-subtitle">AI와 함께 만든 이야기로 <br/>당신의 21세기를 재발견하세요.</h2>
        <div class="divider"></div> <!-- 새로 추가된 구분선 -->
      </div>

      <!-- Related Videos Section -->
      <div class="video-container">
        <div class="iframe-wrapper">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/h2yBi1ZRcG8?si=F1Z3G6Cf7LAv6dS4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <!-- Content Box -->
      <div class="content-box">
        
        <div class="poster-container">
          <img class="original-poster" src="@/assets/original-poster.png" alt="original-poster">
        </div>

        <div class="poster-container">
          <h5 class="video-title">흔들리고 침몰하는</h5>
        </div>

        <!-- Quote Section -->
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>"가만히 있으라"</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <em
              >수아(강승민)</em
            >
            <cite>흔들리고 침몰하는</cite>
          </figcaption>
        </figure>

        <br />

        <!-- Background Music -->
        <iframe
          id="bgMusic"
          style="display: none"
          :src="
            'https://www.youtube.com/embed/' + 'xZ7e3deNChc' + '?enablejsapi=1'
          "
          allow="autoplay"
        >
        </iframe>

        <hr />

        <!-- Synopsis Section -->
        <h5 class="synopsis"><strong>✨ 시놉시스</strong></h5>
        <p class="paContent" ><strong>새천년을 맞이한 한 소녀, 수아의 성장과 상실의 이야기</strong></p>
        <p class="paContent" >2000년, 갓 태어난 수아는 행복한 가족 안에서 성장한다. IMF 경제위기를 극복하고 한일 월드컵의 열기로 가득했던 그 시절, 수아는 부모님과 함께 세상이 환히 밝아지는 것만 같았다.
                            그러나 2004년, 노무현 대통령 탄핵 사태를 겪으며 가족 간 갈등이 깊어지기 시작한다. 부모님의 잦은 부재 속에서 수아는 점점 혼자가 되어간다. 그런 수아에게 유일한 친구가 되어준 것은 창밖을 날아다니는 노란 나비였다.
                            2010년, 천안함 사건 등 불안정한 국내 상황 속에서 수아는 나비와의 환상적인 여행을 통해 현실에서 벗어나곤 했다. 하지만 점차 나비가 사라져가면서, 수아는 점점 더 현실과 마주하게 된다.
                            2014년, 세월호 참사로 인한 충격은 수아에게 큰 혼란을 불러일으킨다. 그때 수아는 가족과의 갈등 속에서 자신만의 방법으로 나비를 그려내며, 새로운 관계를 시작한다.
                            수아가 겪은 사건들은 한국 현대사의 굵직한 사건들과 닿아 있다. 개인의 성장통이 시대의 변화와 뒤얽히면서, 수아의 미래는 어떤 모습일지 궁금해진다. 그녀가 선택할 길은 과연 무엇일까?
                          </p>

        <hr />

        <!-- Event Details Section -->
        <h5 class="eventSummary"><strong>🕰️ 사건 개요</strong></h5>
        <ul class="paContent" >
          <li>
            <strong>기간:</strong> 2000년 ~ 2014년
          </li>
          <li>
            <strong>핵심 키워드:</strong> #21세기 #새천년 #김대중 #월드컵 #KTX #노무현 #이명박 #천안함 #연평도 #박근혜 #세월호
          </li>
        </ul>

        <hr />

        <!-- Timeline Section -->
        <h5 class="eventLists"><strong>📅 그날의 사건들</strong></h5>
        <ul class="paContent">
          <li><strong>2002년:</strong> 한일 월드컵 개최</li>
          <li><strong>2004년:</strong> KTX 개통, 노무현 대통령 탄핵 사태</li>
          <li><strong>2010년:</strong> 천안함 폭침, 연평도 포격 사건</li>
          <li><strong>2014년:</strong> 세월호 참사</li>
        </ul>

        <hr />

        <!-- Historical Context Section -->
        <h5 class="historyDescription"><strong>📌 시대상</strong></h5>
        <p class="paContent">IMF 외환위기를 겪으며 부정적 전망이 강했던 한국 사회는 2000년대 들어 새로운 변화와 도약을 맞이한다. 2002년 한일 월드컵 공동 개최를 통해 국민들은 자긍심과 희망을 느꼈고, KTX 개통 등 사회 인프라가 발전하면서 삶의 질도 향상되었다.
그러나 2000년대 중반 이후 정치적 혼란이 가중되었다. 2004년 노무현 대통령 탄핵 사태는 국민들에게 큰 충격을 주었고, 이후 이명박, 박근혜 정부가 들어서면서 보수와 진보 진영 간 갈등이 고조되었다. 또한 천안함 사건, 연평도 포격 등 안보 위기도 발생했다.
이러한 시대적 배경 속에서 개인의 일상도 크게 흔들렸다. 가정 내 갈등이 깊어지고, 청소년들은 사회 불안에 시달렸다. 특히 2014년 세월호 참사는 국민들에게 큰 충격과 아픔을 안겨주었다.
이처럼 21세기 초반 한국 사회는 경제적 성장과 정치적 혼란, 안보 불안 등이 혼재된 복잡한 모습을 보였다. 개인의 성장과 시대적 굴곡이 밀접하게 맞물리면서, 새로운 세대가 겪어야 했던 방황과 고민은 더욱 깊어졌다.
        </p>

      </div>

    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.dark-container {
  background-color: #222222;
  min-height: 100vh;
  color: white;
  font-family: 'Raleway', sans-serif;
  padding: 0;
  margin: 0;
}

.video-container {
  max-width: 100%;
  margin: 20px auto; /* 박스 중앙 정렬 */
  text-align: center; /* 제목 중앙 정렬 */
  padding: 20px; /* 내부 여백 */
}

.video-title {
  margin-bottom: 2rem; /* 제목과 비디오 간격 */
  font-size: 3rem;
  font-weight: 10;
  font-family: "ClimateCrisis";
  color: white;
}

.iframe-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 비율 */
  height: 0;
  overflow: hidden;
}

.iframe-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* 웰컴 박스 */
.welcome-section {
  padding: 40px 20px;
  text-align: left;
}
.welcome-title {
  font-size: 36px;
  font-weight: bold;
  font-family: "Raleway-Bold";
  margin-bottom: 16px;
  letter-spacing: -1px;
}
.welcome-subtitle {
  font-size: 18px;
  font-weight: 150;
  font-family: "Raleway-SemiBold";
  color: rgba(255, 255, 255);
  letter-spacing: -1px;
}
/* 구분선 스타일 */
.divider {
  width: calc(100% + 40px); /* 컨테이너보다 좌우로 20px씩 더 길게 */
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px -20px; /* 음수 마진으로 좌우로 확장 */
  margin-top: 55px;
}

/* 콘텐츠 박스 */
.content-box {
  background-color: #333; /* 박스 배경색 */
  padding: 20px; /* 내부 여백 */
  border-radius: 8px; /* 둥근 모서리 */
  margin: 20px; /* 외부 여백 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 박스 그림자 */
}

.poster-container {
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
}

.original-poster {
  max-width: 40%;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 4px;
}

/* blockquote 스타일 */
.blockquote {
  font-size: 1.5rem;
  font-weight: light;
  font-family: "BookkMyungjo_Light";
  margin: 2rem 0;
}

.blockquote-footer {
  color: #6c757d;
  margin-top: 0.5rem;
}

/* 섹션 제목 스타일 */
h5 {
  margin: 1.5rem 0 1rem;
  font-weight: bold;
}

/* 콘텐츠 텍스트 스타일 */
.paContent {
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* 모바일 화면에서의 조정 */
@media screen and (max-width: 768px) {
  .modal-image {
    max-width: 80%;
  }

  .video-container {
    margin: 0.5rem 0;
  }

  .blockquote {
    font-size: 1.2rem;
  }
}

</style>