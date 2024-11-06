<template>
   <div v-if="isOpen" class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content bg-dark text-white">
        <div class="modal-header border-secondary d-flex justify-content-between">
          <!-- 왼쪽: 제목 -->
          <h1 class="modal-title fs-4">{{ movie?.title || '' }}</h1>
          
          <!-- 오른쪽: 버튼들 -->
          <div class="d-flex align-items-center gap-2">
            <button 
              v-if="player"
              class="btn btn-outline-light"
              @click="toggleMusic"
            >
              <i :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"></i>
              OST 재생하기
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
          <div class="text-center">
            <div class="d-flex justify-content-center mb-3">
              <img 
                :src="movie?.imageUrl" 
                :alt="movie?.title" 
                class="modal-image img-fluid"
              />
            </div>
            <h5 class="mb-3">{{ movie?.eventYear }}&nbsp;{{ movie?.event }}</h5>
            <p class="movie-description">{{ movie?.summary }}</p>
          </div>
          <br>
          <div v-html="renderedHTML"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieModal',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    movie: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      renderedHTML: '',
      isPlaying: false,
      player: null
    };
  },
  methods: {
    closeModal() {
      if (this.player) {
        this.player.stopVideo();
      }
      this.isPlaying = false;
      this.$emit('close');
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
      if (window.YT && window.YT.Player) {
        const iframe = document.getElementById('bgMusic');
        if (iframe) {
          this.player = new window.YT.Player('bgMusic', {
            events: {
              'onStateChange': (event) => {
                // 재생 상태 변경시 isPlaying 업데이트
                this.isPlaying = event.data === window.YT.PlayerState.PLAYING;
              }
            }
          });
        }
      }
    }
  },
  async updated() {
    const id = this.movie?.id || 1;
    try {
      const response = await fetch(`/src/assets/movie-html/${id}.html`);
      if (response.ok) {
        this.renderedHTML = await response.text();
        // DOM이 업데이트된 후에 플레이어 초기화
        this.$nextTick(() => {
          if (!this.player) {
            if (window.YT && window.YT.Player) {
              this.initializePlayer();
            } else {
              // YouTube API가 아직 로드되지 않았다면 기다림
              window.onYouTubeIframeAPIReady = this.initializePlayer;
            }
          }
        });
      }
    } catch (error) {
      console.error('Failed to load HTML content');
    }
  },
  beforeUnmount() {
    if (this.player) {
      this.player.stopVideo();
      this.player.destroy();
    }
  }
};
</script>

<style scoped>
.modal-header {
  padding: 1rem 1.5rem; /* 헤더의 패딩 값 조정 */
}

/* 버튼 그룹 스타일 */
.d-flex.align-items-center {
  margin-right: 0.1rem; /* 오른쪽 여백 추가 */
}

.modal-image {
  max-width: 40%;
  max-height: 50vh;
  object-fit: cover;
  border-radius: 4px;
}

.modal.show {
  display: block;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal {
  z-index: 1050;
}

.modal-backdrop {
  z-index: 1040;
}

.youtube-player-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  overflow: hidden;
}
</style>