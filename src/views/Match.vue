<template>
    <div class="container">
      <!-- 상단바 -->
      <header class="header">
        <div class="logo-container">
          <img class="logo" src="@/assets/mock-logo.png" alt="로고" />
        </div>
        <button class="sidebar-button" @click="toggleSidebar">
          &#9776; <!-- 작대기 세 개 아이콘 -->
        </button>
      </header>
  
      <!-- 사이드바 -->
      <div v-if="isSidebarOpen" class="sidebar">
        <button class="close-sidebar" @click="toggleSidebar">X 닫기</button>
        <p>사이드바 내용</p>
      </div>
  
      <!-- 채팅 창 영역 -->
      <div class="chat-box">
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="['chat-bubble', message.isUser ? 'user-bubble' : 'bot-bubble']"
        >
          {{ message.text }}
        </div>
      </div>
  
      <!-- 프롬프트 입력 영역 -->
      <footer class="footer">
        <input
          type="text"
          v-model="newMessage"
          placeholder="메시지"
          @keyup.enter="sendMessage"
          class="message-input"
        />
        <button @click="sendMessage" class="send-button">➤</button>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newMessage: "", // 새로운 메시지를 저장
        messages: [], // 채팅 메시지 목록
        isSidebarOpen: false, // 사이드바 열림 여부
      };
    },
    methods: {
      sendMessage() {
        if (this.newMessage.trim() !== "") {
          // 메시지가 비어 있지 않을 때만 전송
          this.messages.push({ text: this.newMessage, isUser: true }); // 보낸 메시지는 사용자 메시지로 분류
          this.newMessage = ""; // 입력 창을 비움
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
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    background-color: black;
    color: white;
    margin: 0; /* 좌우 하단 마진 제거 */
  }
  
  /* 상단바 스타일 */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: black;
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
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background-color: #333;
    color: white;
    padding: 10px;
    z-index: 100;
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
  }
  
  .chat-bubble {
    background-color: #4f4f4f; /* 짙은 회색 말풍선 */
    color: white;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    max-width: 80%;
  }
  
  .user-bubble {
    background-color: #007bff; /* 사용자 말풍선 색 (파란색) */
    color: white;
    margin-left: auto; /* 오른쪽 정렬 */
  }
  
  .bot-bubble {
    background-color: #4f4f4f; /* 봇 말풍선 색 (짙은 회색) */
    color: white;
    margin-right: auto; /* 왼쪽 정렬 */
  }
  
  /* 프롬프트 입력창 스타일 */
  .footer {
    display: flex;
    padding: 10px;
    background-color: black;
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
    color: #aaa; /* 옅은 글씨로 '메시지' 표시 */
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
  