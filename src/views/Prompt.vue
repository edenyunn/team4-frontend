<!-- components/UserPrompt.vue -->
<template>
    <div id="userPrompt">
      <!-- 채팅 로그 보여주는 곳 -->
      <section class="chatbox bg-body-secondary p-3 rounded-2">
        <!-- v-for 로 반복을 할 때는 => :key="" 이 있어야 한다. -->
        <article v-for="(chat, idx) in chatHistory" :key="idx"
          class="mb-3 d-flex" :class="{ 'justify-content-end': chat.isUser }">
  
          <div class="card mw-6">
            <div class="card-body">
              {{ chat.message }}
            </div>
          </div>
  
        </article>
  
      </section>
      <hr>
      <!-- 프롬프트 입력하는 곳 -->
      <div class="input-group">
        <span class="input-group-text">Prompt</span>
        <textarea v-model="userPrompt" class="form-control" aria-label="Prompt" rows="3"></textarea>
        <button @click="onBtnClick" class="btn btn-primary">
          <i class="bi bi-check-lg"></i>
        </button>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios'
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts/'
  
  export default {
    data() {
      return {
        chatHistory: [],
        userPrompt: '',
      }
    },
    methods: {
      // async => 함수 안에 axios 라는 말이 있으면 쓴다.
      async onBtnClick() {
        // data 에 있는 값들은 this를 붙여야 한다!
        this.chatHistory.push({ isUser: true, message: this.userPrompt })
        // URL 로 요청을 보냄. [axios 앞에는 await가 필요하다
        const res = await axios.get(BASE_URL + this.userPrompt)
        // 받은 응답메시지를 chatHistory 추가함
        this.chatHistory.push({ isUser: false, message: res.data.body })
        // 사용자 입력 비우기
        this.userPrompt = ''
      }
    }
  }
  </script>
  
  <style>
  .chatbox {
    height: 50vh;
    overflow: auto;
  }
  
  .mw-6 {
    max-width: 60%;
  }
  </style>