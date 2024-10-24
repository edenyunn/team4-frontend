<template>
  <textarea rows="3" cols="40" v-model="userInput"></textarea>
  <button @click="onBtnClick">전송</button>
  <ul>
    <li v-for="(chat, idx) in chatHistory" :key="idx">
      <span v-if="chat.isUser">사용자: </span>
      <span v-else>LLM: </span>
      {{ chat.message }}
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInput: '',
      chatHistory: [],
    }
  },
  methods: {
    async onBtnClick() {
      // 사용자 메세지를 chatHistory 에 넣고
      this.chatHistory.push({ isUser: true, message: this.userInput })
      // 우리 서버로 요청을 보내고
      const res = await axios.post('http://127.0.0.1:5000/', {
        message: this.userInput,
      })
      // 응답 메세지도 넣는다.
      const llmOutput = { isUser: false, message: res.data.llm }
      this.chatHistory.push(llmOutput)
      // 입력창 비워주기
      this.userInput = ''
    }
  }
}
</script>

<style>

</style>