<!-- components/Sidebar.vue -->
<template>
  <div>
    <!-- 오버레이: 사이드바 외부 영역 -->
    <div 
      v-if="isSidebarOpen" 
      class="overlay" 
      @click="$emit('toggle-sidebar')"
    ></div>
    
    <!-- 사이드바 -->
    <div 
      class="sidebar" 
      :class="{ 'sidebar-open': isSidebarOpen }"
    >
      <button class="close-sidebar" @click="$emit('toggle-sidebar')">X 닫기</button>
      <br>
      <div class="sidebar-menu">
        <RouterLink 
          to="/movies" 
          class="menu-item" 
          @click="closeSidebar"
        >
          Timeline
          <span class="small-subtitle">현대사 타임라인</span>
        </RouterLink>
        <RouterLink 
          to="/search" 
          class="menu-item" 
          @click="closeSidebar"
        >
          Search
          <span class="small-subtitle">질문으로 영화 찾기</span>
        </RouterLink>
        <RouterLink 
          to="/cast" 
          class="menu-item" 
          @click="closeSidebar"
        >
          Cast
          <span class="small-subtitle">배우 개그 유니버스</span>
        </RouterLink>
        <RouterLink 
          to="/vibe" 
          class="menu-item" 
          @click="closeSidebar"
        >
          Vibe
          <span class="small-subtitle">AI 음악 시리즈</span>
        </RouterLink>
        <RouterLink 
          to="/original" 
          class="menu-item" 
          @click="closeSidebar"
        >
          Original
          <span class="small-subtitle">AI 영화 상영관</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSidebarOpen: Boolean, // 사이드바 열림 여부를 부모로부터 전달받음
  },
  methods: {
    closeSidebar() {
      this.$emit("toggle-sidebar"); // 부모 컴포넌트에 이벤트 전달
    },
  },
};
</script>

<style scoped>
/* 기존 스타일 그대로 유지 */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px; /* 기본 너비 */
  height: 100%;
  background-color: #333;
  color: white;
  padding: 10px;
  z-index: 1050;
  transform: translateX(-100%); /* 기본 상태: 화면 밖 */
  transition: transform 0.3s ease; /* 부드러운 애니메이션 */
}

/* 열림 상태 */
.sidebar.sidebar-open {
  transform: translateX(0); /* 열릴 때 화면 안으로 이동 */
}

/* 오버레이 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 검은색 배경 */
  z-index: 1049; /* 사이드바 바로 아래 레이어 */
}

/* 닫기 버튼 */
.close-sidebar {
  background: none;
  border: none;
  color: white;
  font-size: 15px;
  font-family: 'Pretendard-Medium';
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

/* 메뉴 스타일 */
.sidebar-menu {
  display: flex;
  flex-direction: column;
}

.menu-item {
  padding-left: 20px;
  color: white;
  font-family: 'Pretendard-SemiBold';
  text-decoration: none;
  margin: 8px 0;
  position: relative;
}

.menu-item:hover {
  text-decoration: underline;
}

.small-subtitle {
  display: block;
  font-size: 12px;
  font-family: 'Pretendard-Medium';
  color: #ccc;
  margin-top: 3px;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .sidebar {
    width: 250px; /* 작은 화면에서는 너비 축소 */
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 200px; /* 더 작은 화면에서는 더 축소 */
  }
}
</style>
