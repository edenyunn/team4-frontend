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
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6RXzBUXWWdM?si=ZvuSPIzIkkm7HH66"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
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
        <p class="paContent" >영화 시놉시스 내용</p>

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
          <li>
            <strong>2014년 4월 16일:</strong> 세월호 사건
          </li>
        </ul>

        <hr />

        <!-- Historical Context Section -->
        <h5 class="historyDescription"><strong>📌 시대상</strong></h5>
        <p class="paContent">노무현 이명박근혜</p>

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