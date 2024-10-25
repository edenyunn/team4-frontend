<template>
  <!-- 헤더 컴포넌트 사용 -->
  <Header :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <!-- 사이드바 컴포넌트 사용 -->
  <Sidebar :isSidebarOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <RouterView />
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: {
    Header, Sidebar, // 불러온 컴포넌트를 등록합니다.
  },
  data() {
    return {
      isSidebarOpen: false, // 사이드바 열림 여부
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen; // 사이드바 열림/닫힘 토글
    },
}
}
</script>

<style scoped>
</style>
