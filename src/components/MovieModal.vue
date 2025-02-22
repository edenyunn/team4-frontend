<!-- src\components\MovieModal.vue -->
<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="modal show d-block"
      tabindex="-1"
      @click.self="closeModal"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content text-white">
          <div
            class="modal-header border-secondary d-flex justify-content-between"
          >
            <h1 class="modal-title fs-1">{{ movie?.details?.modalYear }}</h1>
            <div class="d-flex align-items-center gap-2">
              <!-- 배경음악이 있을 때만 버튼 표시 -->
              <button
                v-if="movieBgmId && player"
                class="btn btn-outline-light"
                @click="toggleMusic"
              >
                <i
                  :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"
                ></i>
                OST
              </button>
              <button
                type="button"
                class="btn-close btn-close-white"
                aria-label="Close"
                @click="closeModal"
              ></button>
            </div>
          </div>
          <div class="modal-body">
            <div class="text-center mb-4">
              <div class="d-flex justify-content-center mb-3">
                <img
                  :src="movie?.imageUrl"
                  :alt="movie?.title"
                  class="modal-image img-fluid"
                />
              </div>
              <h2 class="mb-3">{{ movie?.title || "" }}</h2>
              <p class="movie-description">{{ movie?.event }}</p>
            </div>

            <!-- Quote Section -->
            <figure class="text-center" v-if="movie?.details?.quote">
              <blockquote class="blockquote">
                <p>"{{ movie.details.quote.text }}"</p>
              </blockquote>
              <figcaption class="blockquote-footer">
                <em
                  >{{ movie.details.quote.author }} ({{
                    movie.details.quote.actor
                  }})</em
                >
                <cite :title="movie.details.quote.source">{{
                  movie.details.quote.source
                }}</cite>
              </figcaption>
            </figure>

            <br />

            <!-- 영화 상세 정보 섹션 -->
            <div class="movie-details mb-4" v-if="movie?.details">
              <h5 class="details-title"><strong>🎬 영화 정보</strong></h5>
              <div class="details-grid">
                <div class="detail-item">
                  <span class="detail-label">개봉일</span>
                  <span class="detail-value">{{
                    movie.details.releaseDate
                  }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">장르</span>
                  <span class="detail-value">{{ movie.details.genre }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">러닝타임</span>
                  <span class="detail-value">{{ movie.details.runtime }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">관객수</span>
                  <span class="detail-value">{{ movie.details.audience }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">등급</span>
                  <span class="detail-value">{{ movie.details.rating }}</span>
                </div>
                <div class="detail-item">
                  <span class="detail-label">감독</span>
                  <span class="detail-value">{{ movie.details.director }}</span>
                </div>
              </div>

              <!-- 출연진 정보 -->
              <div class="cast-section mt-3" v-if="movie.details.cast">
                <h6 class="cast-title">주요 출연진</h6>
                <div class="cast-list">
                  <div
                    v-for="actor in movie.details.cast"
                    :key="actor.name"
                    class="cast-item"
                  >
                    {{ actor.name }} ({{ actor.role }})
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <!-- Background Music -->
            <iframe
              v-if="movieBgmId"
              id="bgMusic"
              style="display: none"
              :src="
                'https://www.youtube.com/embed/' + movieBgmId + '?enablejsapi=1'
              "
              allow="autoplay"
            >
            </iframe>

            <!-- 아래 나머지 섹션 -->
            <!-- Synopsis Section -->
            <h5 class="synopsis"><strong>✨ 시놉시스</strong></h5>
            <p
              v-for="(paragraph, index) in movie?.details?.synopsis"
              :key="index"
              class="paContent"
            >
              {{ paragraph }}
            </p>

            <hr />

            <!-- Event Details Section -->
            <h5 class="eventSummary"><strong>🕰️ 사건 개요</strong></h5>
            <ul class="paContent" v-if="movie?.details?.eventDetails">
              <li>
                <strong>기간:</strong> {{ movie.details.eventDetails.period }}
              </li>
              <li>
                <strong>핵심 키워드:</strong>
                {{
                  movie.details.eventDetails.keywords
                    .map((k) => "#" + k)
                    .join(" ")
                }}
              </li>
            </ul>

            <hr />

            <!-- Timeline Section -->
            <h5 class="eventLists"><strong>📅 그날의 사건들</strong></h5>
            <ul class="paContent">
              <li
                v-for="(item, index) in movie?.details?.eventDetails?.timeline"
                :key="index"
              >
                <strong>{{ item.date }}:</strong> {{ item.event }}
              </li>
            </ul>

            <hr />

            <!-- Historical Context Section -->
            <h5 class="historyDescription"><strong>📌 시대상</strong></h5>
            <p
              class="paContent"
              v-html="movie?.details?.historicalContext.replace(/\n/g, '<br>')"
            ></p>

            <hr />

            <!-- Awards Section with Multiple Categories -->
            <div v-if="movie?.details?.awards?.length" class="awards-section">
              <h5 class="awards-title"><strong>🏆 대표 수상 내역</strong></h5>
              <div class="awards-container">
                <div
                  v-for="(award, index) in movie?.details?.awards"
                  :key="index"
                  class="paContent"
                >
                  <div class="award-content">
                    <div class="award-header">
                      <span class="award-year">{{ award.year }}</span>
                      <span class="award-ceremony"
                        ><strong>{{ award.ceremony }}</strong></span
                      >
                    </div>
                    <div class="award-categories">
                      <div
                        v-for="(category, catIndex) in award.categories"
                        :key="catIndex"
                        class="category-item"
                      >
                        <span class="category-name">{{ category.name }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr v-if="movie?.details?.awards?.length" />

            <!-- Related Videos Section -->
            <h5 class="prVideo"><strong>📰 함께 보면 좋을 자료</strong></h5>
            <div
              v-for="(video, index) in movie?.details?.relatedVideos"
              :key="index"
              class="video-container"
            >
              <iframe
                width="100%"
                height="315"
                :src="
                  'https://www.youtube.com/embed/' +
                  video.youtubeId +
                  '?si=' +
                  video.params
                "
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              >
              </iframe>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "MovieModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    movie: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      isPlaying: false,
      player: null,
    };
  },
  computed: {
    movieBgmId() {
      // 배경음악 ID가 있을 때만 처리
      if (this.movie?.details?.backgroundMusic?.youtubeId) {
        this.$nextTick(() => {
          if (window.YT && window.YT.Player) {
            this.initializePlayer();
          } else {
            window.onYouTubeIframeAPIReady = this.initializePlayer;
          }
        });
        return this.movie.details.backgroundMusic.youtubeId;
      }
      return null; // 배경음악이 없을 경우
    },
  },
  methods: {
    closeModal() {
      if (this.player) {
        this.player.stopVideo();
      }
      this.isPlaying = false;
      this.$emit("close");
    },
    toggleMusic() {
      if (this.player) {
        if (this.isPlaying) {
          this.player.pauseVideo();
        } else {
          this.player.playVideo();
        }
        this.isPlaying = !this.isPlaying;
      }
    },
    initializePlayer() {
      // 배경음악 ID가 있을 때만 플레이어 초기화
      if (
        window.YT &&
        window.YT.Player &&
        this.movie?.details?.backgroundMusic?.youtubeId
      ) {
        const iframe = document.getElementById("bgMusic");
        if (iframe) {
          this.player = new window.YT.Player("bgMusic", {
            events: {
              onStateChange: (event) => {
                this.isPlaying = event.data === window.YT.PlayerState.PLAYING;
              },
            },
          });
        }
      }
    },
  },
  beforeUnmount() {
    if (this.player) {
      this.player.stopVideo();
      this.player.destroy();
    }
  },
};
</script>

<style scoped>
/* Modal animation */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(-10px);
}

.modal-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

.modal-dialog {
  margin: 1.75rem auto;
  width: 90%;
  max-width: 800px; /* 데스크톱 기본 최대 너비 */
  transition: all 0.3s ease;
}

.modal-content {
  background-color: #333333;
  transition: all 0.3s ease;
}

.modal-header {
  padding: 1rem 1.5rem;
  font-family: "Pretendard-SemiBold";
}

.modal-body {
  font-family: "Pretendard-Light";
}

/* 좌우 배치 스타일 */
.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center; /* 전체 패널 세로 중앙 정렬 */
  gap: 2rem;
  margin-bottom: 2rem;
}

.left-panel {
  flex: 1;
  max-width: 50%;
}

.right-panel {
  flex: 1;
  max-width: 50%;
  background-color: #c9c9c9; /* 박스 배경색 */
  color: black;
  padding: 20px; /* 내부 여백 */
  border-radius: 8px; /* 둥근 모서리 */
  margin: 20px; /* 외부 여백 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 박스 그림자 */
  display: flex; /* 추가 */
  flex-direction: column; /* 추가 */
  justify-content: center; /* 세로 중앙 정렬 */
}

.d-flex.align-items-center {
  margin-right: 0.1rem;
}

.modal-image {
  max-width: 40%;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 4px;
}

.modal {
  z-index: 1050;
}

.modal-backdrop {
  z-index: 1040;
}

.video-container {
  max-width: 1000px; /* 최대 가로 길이를 768px로 제한 */
  margin: 1rem auto; /* 세로 여백과 가운데 정렬 */
  aspect-ratio: 16 / 9; /* 16:9 비율 유지 */
  background: #000; /* 비디오 로딩 전 배경색 설정 (선택 사항) */
  overflow: hidden;
}

.video-container iframe {
  width: 100%; /* 부모 컨테이너의 너비에 맞춤 */
  height: 100%; /* 부모 컨테이너의 높이에 맞춤 */
  border: 0; /* 테두리 제거 */
}

/* blockquote 스타일 */
.blockquote {
  font-size: 1.5rem;
  font-weight: light;
  font-family: "BookkMyungjo_Light";
  margin: 2rem 0;
  padding: 0 1.5rem;
}

.blockquote-footer {
  color: #6c757d;
  margin-top: 0.5rem;
  font-family: "Pretendard-Light";
}

/* 섹션 제목 스타일 */
h2 {
  margin: 1.5rem 0 1rem;
  font-weight: bold;
  font-family: "Pretendard-SemiBold";
  margin-top: 25px;
}

/* 콘텐츠 텍스트 스타일 */
.paContent {
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: "Pretendard-Light";
}

/* 새로 추가된 영화 정보 스타일 */
.movie-details {
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background-color: #434343;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.detail-label {
  font-size: 0.9em;
  color: #aaa;
  font-family: "Pretendard-Medium";
}

.detail-value {
  font-size: 1.1em;
  font-family: "Pretendard-SemiBold";
}

.cast-section {
  margin-top: 20px;
}

.cast-title {
  color: #aaa;
  margin-bottom: 10px;
  font-family: "Pretendard-Medium";
}

.cast-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.cast-item {
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9em;
  width: fit-content;
  font-family: "Pretendard-Medium";
  background-color: #525252;
}

/* Large devices (desktops) */
@media (min-width: 992px) {
  .modal-dialog {
    width: 50%;
  }
}

/* Medium devices (tablets) */
@media (max-width: 991.98px) {
  .modal-dialog {
    width: 65%;
    margin: 1rem auto;
  }
}

/* Small devices (phones) */
@media (max-width: 768px) {
  .modal-dialog {
    width: 85%; /* 모바일에서는 더 작은 너비 */
    margin: 0.5rem auto;
  }
}

/* 모바일 화면에서의 조정 */
@media screen and (max-width: 768px) {
  .top-section {
    flex-direction: column;
    align-items: center; /* 추가: 중앙 정렬 */
  }

  .left-panel,
  .right-panel {
    max-width: 100%;
  }

  .modal-image {
    max-width: 80%;
  }

  .video-container {
    margin: 0.5rem 0;
  }

  .blockquote {
    font-size: 15px;
    margin: 10px;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .cast-list {
    flex-direction: column;
  }
}
</style>