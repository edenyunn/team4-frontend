<!-- components/Sidebar.vue -->
<template>
    <div v-if="isSidebarOpen" class="sidebar">
      <button class="close-sidebar" @click="$emit('toggle-sidebar')">X 닫기</button>
      <div class="sidebar-menu">
        <RouterLink to="/match" class="menu-item">Match</RouterLink>
        <RouterLink to="/movies" class="menu-item">Timeline</RouterLink>
        <RouterLink to="/cast" class="menu-item">Cast</RouterLink>
        <RouterLink to="/original" class="menu-item">Original</RouterLink>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isSidebarOpen: Boolean, // 사이드바 열림 여부를 부모로부터 전달받음
    },
  };
  </script>
  
  <style scoped>
  /* 사이드바 스타일을 여기에 작성 */
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
  
  .close-sidebar {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
  }
  </style>
  