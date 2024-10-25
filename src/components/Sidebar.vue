<!-- components/Sidebar.vue -->
<template>
    <div v-if="isSidebarOpen" class="sidebar">
      <button class="close-sidebar" @click="$emit('toggle-sidebar')">X 닫기</button>
      <div class="sidebar-menu">
        <RouterLink to="/search" class="menu-item">Search</RouterLink>
        <RouterLink to="/movies" class="menu-item">Timeline</RouterLink>
        <RouterLink to="/inside" class="menu-item">Inside</RouterLink>
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
  
  .menu-item {
    padding-left: 20px; /* 들여쓰기 추가 */
    color: white;
    text-decoration: none;
    margin: 8px 0;
  }
  
  .menu-item:hover {
    text-decoration: underline; /* 선택 사항: 마우스를 올렸을 때 스타일 추가 */
  }
  
  .close-sidebar {
    background: none;
    border: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }
  </style>
  