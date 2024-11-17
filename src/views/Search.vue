<template>
  <div class="my-container">
    <!-- guide Section -->
    <div class="welcome-section">
      <h1 class="welcome-title">Search</h1>
      <br/>
      <h2 class="welcome-subtitle">한국 현대사를 다룬 영화,<br/> 알고 싶은 사건과 인물로 탐색하세요.</h2>
      <div class="divider"></div>
    </div>

    <!-- 채팅 창 영역 -->
    <div class="chat-box">
      <div v-for="(chat, index) in chatHistory" :key="index"
        :class="['chat-bubble', chat.isUser ? 'user-bubble' : 'bot-bubble']">
        <!-- 사용자 메시지는 그대로 표시 -->
        <template v-if="chat.isUser">
          {{ chat.message }}
        </template>
        <!-- 봇 메시지는 generation 내용만 표시 -->
        <template v-else>
          <div v-html="typeof chat.message === 'object' ? chat.message.generation : chat.message"></div>
        </template>
        <!-- 영화 포스터 목록 -->
        <div v-if="chat.movies && chat.movies.length > 0" class="movie-posters">
          <div v-for="movie in chat.movies" :key="movie.id" 
               class="movie-poster" @click="openMovieModal(movie)">
            <img 
              :src="movie.imageUrl" 
              :alt="movie.title"
              class="movie-poster-img"
              @error="handleImageError"
            >
            <div class="movie-title">{{ movie.title }}</div>
          </div>
        </div>
      </div>
      <!-- 로딩 모션 -->
    </div>
    <div v-if="isLoading" class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>

    <!-- MovieModal 컴포넌트 -->
    <MovieModal 
      :is-open="showModal"
      :movie="selectedMovie"
      @close="closeModal"
    />

    <!-- 프롬프트 입력 영역 -->
    <footer class="footer">
      <input type="text" v-model="userInput" placeholder="메시지" @keyup.enter="sendMessage" class="message-input" :disabled="isLoading" />
      <button @click="sendMessage" class="send-button" :disabled="isLoading">➤</button>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import movies from '@/assets/movies.js'
import MovieModal from '@/components/MovieModal.vue'

const BASE_URL = 'http://127.0.0.1:5000/'

export default {
  components: {
    MovieModal
  },
  data() {
    return {
      userInput: "",
      chatHistory: [],
      isLoading: false,
      showModal: false,
      selectedMovie: null
    };
  },
  methods: {
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
            .map(id => movies.find(m => String(m.id) === String(id)))
            .filter(Boolean);

          // 봇 응답 추가 - llm 객체를 직접 사용
          this.chatHistory.push({ 
            message: res.data.llm, 
            isUser: false,
            movies: matchedMovies
          });

        } catch (error) {
          console.error("Error sending message:", error);
          this.chatHistory.push({ 
            message: "죄송합니다. 오류가 발생했습니다. 잠시 후 다시 시도해주세요.", 
            isUser: false 
          });
        } finally {
          this.isLoading = false;
          this.userInput = '';
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
      console.error('Image failed to load:', e.target.src);
      e.target.src = '/placeholder-movie-poster.jpg';
    }
  },
  mounted() {
    this.$nextTick(() => {
      const chatBox = document.querySelector('.chat-box');
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  },
  updated() {
    this.$nextTick(() => {
      const chatBox = document.querySelector('.chat-box');
      chatBox.scrollTop = chatBox.scrollHeight;
    });
  }
}
</script>
 
 <style scoped>
 /* 검은색 배경에 흰색 글씨, 화면을 꽉 채움 */
 html,
 body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #222222;
 }
 
 .my-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #222222;
  color: white;
  margin: 0;
  position: relative;
  overflow: hidden;
 }
 
 /* 가이드 박스 */
 .welcome-section {
  padding: 40px 20px;
  text-align: left;
 }
 .welcome-title {
  font-size: 36px;
  font-weight: bold;
  font-family: 'Raleway-Bold';
  margin-bottom: -8px;
 }
 .welcome-subtitle {
  font-size: 18px;
  font-weight: 150;
  font-family: 'Raleway-SemiBold';
  color: rgba(255, 255, 255);
 }
 /* 구분선 스타일 */
 .divider {
  width: calc(100% + 40px); /* 컨테이너보다 좌우로 20px씩 더 길게 */
  height: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px -20px; /* 음수 마진으로 좌우로 확장 */
  margin-top: 55px;
 }
 
 /* 채팅박스 스타일 */
 .chat-box {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  /* 말풍선을 세로로 쌓이도록 설정 */
 }
 
 .chat-bubble {
  background-color: #4f4f4f;
  /* 짙은 회색 말풍선 */
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 80%;
  /* 말풍선 최대 너비 설정 */
  display: inline-block;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-line; /* 줄바꿈 유지 */
  font-family: 'Pretendard-Medium';
 }
 
 .user-bubble {
  background-color: #858585;
  /* 사용자 말풍선 색 (파란색) */
  color: white;
  margin-left: auto;
  /* 오른쪽 정렬 */
 }
 
 .bot-bubble {
  background-color: #4f4f4f;
  /* 봇 말풍선 색 (짙은 회색) */
  color: white;
  margin-right: auto;
  /* 왼쪽 정렬 */
 }
 
 .movie-posters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
 }
 
 .movie-poster {
  width: 120px;
  cursor: pointer;
  transition: transform 0.2s;
 }
 
 .movie-poster:hover {
  transform: scale(1.05);
 }
 
 .movie-poster-img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
}
 
 .movie-title {
  font-size: 0.8em;
  font-family: 'Pretendard-Medium';
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
 
 /* 프롬프트 입력창 스타일 */
 .footer {
  display: flex;
  padding: 10px;
  background-color: #222222;
  position: sticky;
  bottom: 0;
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
 
  .send-button {
    font-size: 18px;
    margin-left: 5px;
  }
 
  .movie-poster {
    width: 100px;
  }
 
  .movie-title {
    font-size: 0.7em;
  }
 }
 </style>