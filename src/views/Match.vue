<template>
  <div class="my-container">
    <!-- 상단바 -->
    <header class="header">
      <div class="logo-container">
        <RouterLink to="/match">
          <img class="logo" src="@/assets/mock-logo.png" alt="POV 로고">
        </RouterLink>
      </div>
      <button class="sidebar-button" @click="toggleSidebar">
        &#9776;
      </button>
    </header>

    <!-- 사이드바 -->
    <div v-if="isSidebarOpen" class="sidebar">
      <button class="close-sidebar" @click="toggleSidebar">X 닫기</button>
      <div class="sidebar-menu">
        <RouterLink to="/match" class="menu-item">Match</RouterLink>
        <RouterLink to="/movies" class="menu-item">Timeline</RouterLink>
        <RouterLink to="/cast" class="menu-item">Cast</RouterLink>
        <RouterLink to="/original" class="menu-item">Original</RouterLink>
      </div>
    </div>

    <!-- 채팅 창 영역 -->
    <div class="chat-box">
      <div v-for="(chat, index) in chatHistory" :key="index"
        :class="['chat-bubble', chat.isUser ? 'user-bubble' : 'bot-bubble']">
        {{ chat.message }}
      </div>
      <!-- 로딩 모션 -->
      <div v-if="isLoading" class="loading-spinner"></div>
    </div>

    <!-- 프롬프트 입력 영역 -->
    <footer class="footer">
      <input type="text" v-model="userInput" placeholder="메시지" @keyup.enter="sendMessage" class="message-input" :disabled="isLoading" />
      <button @click="sendMessage" class="send-button" :disabled="isLoading">➤</button>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'http://127.0.0.1:5000/'

export default {
  data() {
    return {
      userInput: "", // 새로운 메시지를 저장
      chatHistory: [], // 채팅 메시지 목록
      isSidebarOpen: false, // 사이드바 열림 여부
      isLoading: false, // 로딩 상태
    };
  },
  methods: {
    async sendMessage() {
      if (this.userInput.trim() !== "") {
        // 메시지가 비어 있지 않을 때만 전송
        this.chatHistory.push({ message: this.userInput, isUser: true }); // 보낸 메시지는 사용자 메시지로 분류
        this.isLoading = true; // 로딩 상태 시작
        // this.userInput = ""; // 입력창 비활성화

        try {
          // URL 로 요청을 보냄
          const res = await axios.post(BASE_URL, {
            message: this.userInput,
          });
          // 받은 응답메시지를 chatHistory에 추가함
          this.chatHistory.push({ isUser: false, message: res.data.llm });
        } catch (error) {
          console.error("Error sending message:", error);
        } finally {
          this.isLoading = false; // 로딩 상태 끝
          this.userInput = ''
        }
      }
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // 사이드바 열림/닫힘 토글
    },
  },
};
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

/* 상단바 스타일 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  left: 0;
  right: 0;
  background-color: #000000;
  position: relative;
}

/* 로고 중앙 정렬 */
.logo-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo {
  height: 40px;
}

.sidebar-button {
  font-size: 24px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

/* 사이드바 스타일 */
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  z-index: 100;
  transition: transform 0.3s ease;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
}

.sidebar.closed {
  transform: translateX(100%);
}

.close-sidebar {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
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
  white-space: normal;
  /* 말풍선 안에서 줄바꿈 허용 */
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

/* 로딩 애니메이션 */
.loading-spinner {
  border: 4px solid rgba(255, 255, 255, 0.3); /* 회색 테두리 */
  border-left-color: #ffffff; /* 흰색 테두리 */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  margin: auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* 프롬프트 입력창 글자 숨김 */
.message-input[disabled] {
  background-color: #444;
  cursor: not-allowed;
  color: transparent; /* 글자 숨김 */
}

/* 프롬프트 입력창 스타일 */
.footer {
  display: flex;
  padding: 10px;
  background-color: #222222;
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
  /* 옅은 글씨로 '메시지' 표시 */
}

.send-button {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
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

  .logo {
    height: 30px;
  }
}
</style>
