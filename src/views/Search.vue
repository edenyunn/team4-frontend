<template>
  <div class="my-container">
    <!-- guide Section -->
    <div class="welcome-section">
      <h1 class="welcome-title">Search</h1>
      <br />
      <h2 class="welcome-subtitle">
        한국 현대사에 관한 영화들을<br />알고 싶은 사건과 인물로 탐색하세요
      </h2>
      <div class="divider"></div>
    </div>

    <!-- 채팅 창 영역 -->
    <div class="chat-box">
      <div class="chat-messages">
        <TransitionGroup name="message" tag="div">
          <div
            v-for="(chat, index) in chatHistory"
            :key="index"
            :class="['chat-bubble', chat.isUser ? 'user-bubble' : 'bot-bubble']"
          >
            <template v-if="chat.isUser">
              {{ chat.message }}
            </template>
            <template v-else>
              <div
                class="markdown-output"
                v-html="
                  renderMarkdown(
                    typeof chat.message === 'object'
                      ? chat.message.generation
                      : chat.message
                  )
                "
              ></div>
            </template>
            <TransitionGroup
              name="poster"
              tag="div"
              v-if="chat.movies && chat.movies.length > 0"
              class="movie-posters"
            >
              <div
                v-for="movie in chat.movies"
                :key="movie.id"
                class="movie-poster"
                @click="openMovieModal(movie)"
              >
                <img
                  :src="movie.imageUrl"
                  :alt="movie.title"
                  class="movie-poster-img"
                  @error="handleImageError"
                />
                <div class="movie-title">{{ movie.title }}</div>
              </div>
            </TransitionGroup>
          </div>
        </TransitionGroup>
      </div>

      <!-- Loading container with transition -->
      <Transition name="fade">
        <div v-if="isLoading" class="loading-container">
          <div class="loading-message">
            현재 POV Search가 답변을 생성 중입니다..
          </div>
          <div class="spinner-grow" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </Transition>
    </div>

    <!-- MovieModal 컴포넌트 -->
    <MovieModal
      :is-open="showModal"
      :movie="selectedMovie"
      @close="closeModal"
    />

    <!-- 프롬프트 입력 영역 -->
    <footer class="footer">
      <input
        type="text"
        v-model="userInput"
        placeholder="메시지"
        @keyup.enter="sendMessage"
        class="message-input"
        :disabled="isLoading"
      />
      <button @click="sendMessage" class="send-button" :disabled="isLoading">
        ➤
      </button>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import movies from "@/assets/movies.js";
import MovieModal from "@/components/MovieModal.vue";
import { marked } from "marked"; // marked 라이브러리 가져오기

const BASE_URL = "http://127.0.0.1:5000/";

export default {
  components: {
    MovieModal,
  },
  data() {
    return {
      userInput: "",
      chatHistory: [],
      isLoading: false,
      showModal: false,
      selectedMovie: null,
    };
  },
  methods: {
    renderMarkdown(content) {
      // 마크다운 형식을 HTML로 변환
      return marked(content);
    },
    async sendMessage() {
      if (this.userInput.trim() !== "") {
        // 사용자 메시지 추가
        this.chatHistory.push({ message: this.userInput, isUser: true });
        this.isLoading = true;

        try {
          const res = await axios.post(BASE_URL, {
            message: this.userInput,
          });

          // 영화 정보 매칭
          const matchedMovies = (res.data.movieIds || [])
            .map((id) => movies.find((m) => String(m.id) === String(id)))
            .filter(Boolean);

          // 봇 응답 추가 - llm 객체를 직접 사용
          this.chatHistory.push({
            message: res.data.llm,
            isUser: false,
            movies: matchedMovies,
          });
        } catch (error) {
          console.error("Error sending message:", error);
          this.chatHistory.push({
            message:
              "죄송합니다. 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
            isUser: false,
          });
        } finally {
          this.isLoading = false;
          this.userInput = "";
        }
      }
    },
    openMovieModal(movie) {
      this.selectedMovie = movie;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedMovie = null;
    },
    handleImageError(e) {
      console.error("Image failed to load:", e.target.src);
      e.target.src = "/placeholder-movie-poster.jpg";
    },
  },
  mounted() {
    this.$nextTick(() => {
      const chatBox = document.querySelector(".chat-box");
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  },
  updated() {
    this.$nextTick(() => {
      const chatBox = document.querySelector(".chat-box");
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  },
};
</script>
 
 <style scoped>
/* 검은색 배경에 흰색 글씨, 화면을 꽉 채움 */
html,
body {
  margin: 0;
  padding: 0;
  background-color: #222222;
  min-height: 100%;
  width: 100%;
}

.my-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* height: 100vh 대신 min-height 사용 */
  background-color: #222222;
  color: white;
  margin: 0;
  position: relative;
}

/* 가이드 박스 */
/* welcome 섹션도 스크롤 방지 */
.welcome-section {
  padding: 40px 20px;
  text-align: left;
  overflow: hidden; /* 스크롤 방지 */
}
.welcome-title {
  font-size: 36px;
  font-weight: bold;
  font-family: "Raleway-Bold";
  margin-bottom: -8px;
}
.welcome-subtitle {
  font-size: 18px;
  font-weight: 150;
  font-family: "Pretendard-Light";
  color: rgba(255, 255, 255);
  line-height: 1.5;
}

/* 구분선 스타일 */
.divider {
  width: calc(100% + 40px); /* 컨테이너보다 좌우로 20px씩 더 길게 */
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px -20px; /* 음수 마진으로 좌우로 확장 */
  margin-top: 55px;
}

.loading-container {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  width: fit-content;
}

.loading-message {
  color: white;
  font-family: "Pretendard-Light";
  font-size: 1 rem;
}

.spinner-grow {
  width: 20px;
  height: 20px;
  background-color: rgb(168, 108, 108);
  flex-shrink: 0; /* Prevents the spinner from being squished */
}

/* Message appear animation */
.message-enter-active,
.message-leave-active {
  transition: all 0.5s ease;
}

.message-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.message-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Ensure proper stacking */
.message-move {
  transition: transform 0.5s ease;
}

/* Movie poster animation */
.poster-enter-active,
.poster-leave-active {
  transition: all 0.5s ease;
}

.poster-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}

.poster-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
}

/* Loading container fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.chat-box {
  flex-grow: 1;
  padding: 10px;
  display: flex; /* flex 복원 */
  flex-direction: column;
  overflow-y: auto;
}

/* 새로 추가 */
.chat-messages {
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Ensure chat bubbles maintain their position */
.chat-bubble {
  background-color: #4f4f4f;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 80%;
  width: fit-content; /* 글자 수에 맞춰 너비 조절 */
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line;
  font-family: "Pretendard-Light";
  display: block; /* inline-block 대신 block 사용 */
  position: relative;
  backface-visibility: hidden;
  will-change: transform, opacity;
}

.user-bubble {
  background-color: #858585;
  color: white;
  margin-left: auto; /* 오른쪽 정렬 유지 */
  margin-right: 0; /* 명시적으로 오른쪽 마진 제거 */
}

.bot-bubble {
  background-color: #4f4f4f;
  color: white;
  margin-right: auto; /* 왼쪽 정렬 유지 */
  margin-left: 0; /* 명시적으로 왼쪽 마진 제거 */
}

.markdown-output {
  font-family: "Pretendard-Light";
  line-height: 1.6;
  color: white;
}

.markdown-output strong {
  font-weight: bold;
}

.markdown-output em {
  font-style: italic;
}

.markdown-output ul {
  list-style-type: disc;
  margin-left: 20px;
}

.movie-posters {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  gap: 10px;
}

.movie-poster {
  width: 200px;
  cursor: pointer;
  transition: transform 0.2s;
}

.movie-poster:hover {
  transform: scale(1.05);
}

.movie-poster-img {
  width: 200px;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
}

.movie-title {
  font-size: 1rem;
  font-family: "Pretendard-Medium";
  text-align: center;
  margin-top: 5px;
  word-break: keep-all; /* 단어 단위로 줄바꿈 */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* footer 수정 */
.footer {
  display: flex;
  padding: 10px;
  background-color: #222222;
  width: 100%;
  box-sizing: border-box;
}

.message-input {
  flex-grow: 1;
  padding: 10px;
  background-color: #333;
  border: none;
  color: white;
  border-radius: 5px;
  outline: none;
}

.message-input::placeholder {
  color: #aaa;
}

/* 프롬프트 입력창 글자 숨김 */
.message-input[disabled] {
  background-color: #444;
  cursor: not-allowed;
  color: transparent; /* 글자 숨김 */
}

.send-button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
  transition: opacity 0.2s;
}

.send-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 반응형 디자인 */
@media (max-width: 600px) {
  .chat-box {
    padding: 5px;
  }

  .footer {
    padding: 5px;
  }

  .message-input {
    padding: 8px;
  }

  .movie-posters {
    justify-content: center;
  }

  .send-button {
    font-size: 18px;
    margin-left: 5px;
  }
}
</style>