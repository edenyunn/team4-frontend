<template>
  <div v-if="isOpen" class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content bg-dark text-white">
        <div
          class="modal-header border-secondary d-flex justify-content-between"
        >
          <h1 class="modal-title fs-4">{{ movie?.title || "" }}</h1>
          <div class="d-flex align-items-center gap-2">
            <button
              v-if="player"
              class="btn btn-outline-light"
              @click="toggleMusic"
            >
              <i
                :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"
              ></i>
              OST 재생
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
            <h5 class="mb-3">{{ movie?.eventYear }} {{ movie?.event }}</h5>
            <p class="movie-description">{{ movie?.summary }}</p>
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
          <p class="paContent">{{ movie?.details?.historicalContext }}</p>

          <hr />

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
      this.$nextTick(() => {
        if (window.YT && window.YT.Player) {
          this.initializePlayer();
        } else {
          window.onYouTubeIframeAPIReady = this.initializePlayer;
        }
      });
      return this.movie.details.backgroundMusic.youtubeId;
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
      if (
        window.YT &&
        window.YT.Player &&
        this.movie?.details?.backgroundMusic
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
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  margin: 1rem 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  font-family: "Pretendard-Light";
}

/* 섹션 제목 스타일 */
h5 {
  margin: 1.5rem 0 1rem;
  font-weight: bold;
  font-family: "Pretendard-SemiBold";
}

/* 콘텐츠 텍스트 스타일 */
.paContent {
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: "Pretendard-Light";
}

/* 새로 추가된 영화 정보 스타일 */
.movie-details {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
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
  background-color: rgba(255, 255, 255, 0.1);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9em;
  font-family: "Pretendard-Medium";
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
    font-size: 1.2rem;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .cast-list {
    flex-direction: column;
  }
}
</style>