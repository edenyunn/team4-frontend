<!-- components/Sidebar.vue -->
<template>
    <div v-if="isSidebarOpen" class="sidebar">
      <button class="close-sidebar" @click="$emit('toggle-sidebar')">X 닫기</button>
      <div class="sidebar-menu">
        <RouterLink to="/movies" class="menu-item">
          Timeline
          <span class="small-subtitle">POV 타임라인</span>
        </RouterLink>
        <RouterLink to="/search" class="menu-item">
          Search
          <span class="small-subtitle">AI 영화 길잡이</span>
        </RouterLink>
        <RouterLink to="/inside" class="menu-item">
          Inside
          <span class="small-subtitle">그 시대 속으로</span>
        </RouterLink>
        <RouterLink to="/cast" class="menu-item">
          Cast
          <span class="small-subtitle">배우 개그 유니버스</span>
        </RouterLink>
        <RouterLink to="/original" class="menu-item">
          Original
          <span class="small-subtitle">AI 영화 시리즈</span>
        </RouterLink>
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
  position: relative;
}

.menu-item:hover {
  text-decoration: underline; /* 선택 사항: 마우스를 올렸을 때 스타일 추가 */
}

.small-subtitle {
  display: block;
  font-size: 12px;
  color: #ccc; /* 소제목 색상 */
  margin-top: 3px;
}

.close-sidebar {
  background: none;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
}
</style>
